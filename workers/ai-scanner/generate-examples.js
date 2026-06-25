require("dotenv").config({ path: "../../.env" });
const { GeminiProvider } = require("./providers");

async function generateExamples() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY");
    return;
  }

  const gemini = new GeminiProvider(process.env.GEMINI_API_KEY);
  
  const domains = [
    "patronflow.co",
    "apple.com",
    "stripe.com",
    "linear.app",
    "vercel.com",
    "figma.com",
    "notion.so",
    "openai.com",
    "anthropic.com",
    "github.com"
  ];

  console.log("# 10 Real Gemini Examples\n");

  const promises = domains.map(async (domain, i) => {
    const brand = domain.split('.')[0];
    const prompt = `What are the best alternatives to ${brand}?`;
    
    let output = `## Example ${i+1}: ${brand}\n**Prompt**: ${prompt}\n\n`;

    try {
      const raw = await gemini.generateRaw(prompt);
      output += `### Raw Gemini Output\n\`\`\`text\n${raw.substring(0, 300)}...[truncated]\n\`\`\`\n\n`;

      const norm = await gemini.normalizeJson(raw);
      output += `### Parsed Gemini JSON\n\`\`\`json\n${JSON.stringify(norm, null, 2)}\n\`\`\`\n\n`;

      output += `### Validation Results\n- **Status**: SUCCESS\n`;
      output += `- **Brands Mentioned Extracted**: ${norm.brands_mentioned.join(', ') || 'None'}\n`;
      output += `- **Competitors Mentioned Extracted**: ${norm.competitors_mentioned.join(', ') || 'None'}\n`;
      output += `- **Confidence**: ${norm.confidence}\n\n`;
    } catch (e) {
      output += `### Validation Results\n- **Status**: FAILED (${e.message})\n\n`;
    }

    output += `---\n`;
    return output;
  });

  const results = await Promise.all(promises);
  console.log(results.join('\n'));
}

generateExamples();
