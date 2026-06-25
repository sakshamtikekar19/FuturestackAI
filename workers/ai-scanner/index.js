require("dotenv").config({ path: "../../.env" });
const axios = require("axios");
const { Worker } = require("bullmq");
const IORedis = require("ioredis");
const { OpenAIProvider, GeminiProvider, ClaudeProvider } = require("./providers");

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000/api";
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

const connection = new IORedis(REDIS_URL, { maxRetriesPerRequest: null });

// Initialize Active Providers
const providers = [];
if (process.env.OPENAI_API_KEY) providers.push(new OpenAIProvider(process.env.OPENAI_API_KEY));
if (process.env.GEMINI_API_KEY) providers.push(new GeminiProvider(process.env.GEMINI_API_KEY));
if (process.env.ANTHROPIC_API_KEY) providers.push(new ClaudeProvider(process.env.ANTHROPIC_API_KEY));

if (providers.length === 0) {
  console.error("CRITICAL: No AI providers initialized. Set API keys in .env.");
  process.exit(1);
}

const PROMPTS = {
  CATEGORY_TOP: (brand, comps) => `What are the top 10 market-leading software platforms in the exact same industry/category as ${comps.length > 0 ? comps.join(", ") : brand}? Do not simply list alternatives, give me the true market leaders.`,
  CATEGORY_COMPARE: (brand, comps) => `Compare the top 5 most popular platforms in the industry that includes ${brand}${comps.length > 0 ? ` and ${comps.join(", ")}` : ''}.`
};

async function executeProvider(provider, promptText) {
  const start = Date.now();
  let raw = null;
  let norm = null;
  let status = "SUCCESS";
  let errorLog = null;
  
  try {
    console.log(`[${provider.name} REQUEST] Generating structured response...`);
    // Single-pass LLM structured output
    norm = await provider.generateStructured(promptText);
    raw = JSON.stringify(norm); // Storing the canonicalized output as raw for debugging parity
    console.log(`[${provider.name} RESPONSE] Received structured response.`);
  } catch (err) {
    console.error(`[${provider.name} ERROR]`, err.message);
    status = "ERROR";
    errorLog = err.message;
  }

  return { raw, norm, timeMs: Date.now() - start, status, errorLog, prefix: provider.keyPrefix };
}

async function startScan(scanId) {
  try {
    const response = await axios.post(`${API_BASE_URL}/scans/${scanId}/start`);
    if (response.data && response.data.scan) return response.data.scan;
  } catch (error) {
    console.error(`Error starting scan ${scanId}:`, error.message);
    throw new Error(`Failed to start scan ${scanId}`);
  }
  return null;
}

async function submitScanResults(scanId, resultsArray) {
  try {
    await axios.post(`${API_BASE_URL}/scans/results`, { scanId, results: resultsArray });
    console.log(`Successfully submitted results for scan: ${scanId}`);
  } catch (error) {
    console.error(`Error submitting results for scan ${scanId}:`, error.message);
    throw error;
  }
}

async function processScan(job) {
  const { scanId } = job.data;
  console.log(`[JOB ${job.id}] Picked up scanId: ${scanId}`);
  
  const scan = await startScan(scanId);
  if (!scan) throw new Error("Scan not found or failed to start");
  console.log(`[SCAN] Processing scan ${scan.id} for domain: ${scan.domain.url}`);
  const domainUrl = scan.domain.url;
  const brand = domainUrl.replace(/^https?:\/\/(www\.)?/, '').split('.')[0];
  const competitors = (scan.domain.competitors || []).map(c => c.url.replace(/^https?:\/\/(www\.)?/, '').split('.')[0]);
  
  const results = [];

  for (const [promptId, promptFn] of Object.entries(PROMPTS)) {
    const promptText = promptFn(brand, competitors);
    console.log(`\n--- Running Prompt ${promptId} ---`);
    
    // Execute all providers concurrently
    const providerResults = await Promise.all(
      providers.map(p => executeProvider(p, promptText))
    );

    // Build the PromptResponse payload mapping dynamically to schema fields
    const payload = { promptId };
    
    // Default nulls
    payload.openai_raw_response = null;
    payload.gemini_raw_response = null;
    payload.openai_normalized_json = null;
    payload.gemini_normalized_json = null;
    payload.openai_processing_time = null;
    payload.gemini_processing_time = null;
    payload.openai_status = "SKIPPED";
    payload.gemini_status = "SKIPPED";
    payload.openai_error_logs = null;
    payload.gemini_error_logs = null;

    for (const pr of providerResults) {
      if (pr.prefix === "openai") {
        payload.openai_raw_response = pr.raw;
        payload.openai_normalized_json = pr.norm;
        payload.openai_processing_time = pr.timeMs;
        payload.openai_status = pr.status;
        payload.openai_error_logs = pr.errorLog;
      }
      if (pr.prefix === "gemini") {
        payload.gemini_raw_response = pr.raw;
        payload.gemini_normalized_json = pr.norm;
        payload.gemini_processing_time = pr.timeMs;
        payload.gemini_status = pr.status;
        payload.gemini_error_logs = pr.errorLog;
      }
    }

    results.push(payload);
    
    // Respect rate limits without polling blocks
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  await submitScanResults(scan.id, results);
  return { success: true, scanId: scan.id };
}

const worker = new Worker("scans", processScan, { 
  connection,
  concurrency: 5 // Horizontally scalable concurrency
});

worker.on('completed', job => {
  console.log(`[JOB ${job.id}] Completed successfully!`);
});

worker.on('failed', (job, err) => {
  console.error(`[JOB ${job.id}] Failed: ${err.message}`);
});

console.log("AI Scanner Worker (BullMQ Provider Abstraction Layer) started!");
console.log(`Active Providers: ${providers.map(p => p.name).join(", ")}`);

