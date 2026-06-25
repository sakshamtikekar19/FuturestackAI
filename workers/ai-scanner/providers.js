const { OpenAI } = require("openai");
const { GoogleGenAI } = require("@google/genai");
const Anthropic = require("@anthropic-ai/sdk");
const { validateOutput } = require("./schema");

const SYSTEM_PROMPT = `You are a strict data extraction API.
You must output ONLY valid JSON.
Required JSON schema:
{
  "brands_mentioned": ["array of explicit brand names"],
  "competitors_mentioned": ["array of alternative brands"],
  "recommendations": ["exact phrases indicating recommendation or exclusion"],
  "ranked_list": ["ranked alternatives in order, if applicable"],
  "confidence": 0.95 // float between 0 and 1
}`;

class AIProvider {
  constructor() {
    if (new.target === AIProvider) throw new Error("Cannot instantiate abstract class");
  }
  get name() { throw new Error("Must implement"); }
  get keyPrefix() { throw new Error("Must implement"); }

  async generateStructured(promptText) { throw new Error("Must implement"); }
}

class OpenAIProvider extends AIProvider {
  constructor(apiKey) {
    super();
    this.client = new OpenAI({ apiKey });
  }

  get name() { return "OpenAI (GPT-4o-mini)"; }
  get keyPrefix() { return "openai"; }

  async generateStructured(promptText) {
    const response = await this.client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: promptText }
      ],
      response_format: { type: "json_object" },
      temperature: 0,
      max_tokens: 500,
    });
    
    const text = response.choices[0].message.content;
    const json = JSON.parse(text);
    return validateOutput(json).success ? json : (() => { throw new Error("Invalid schema from OpenAI"); })();
  }
}

class GeminiProvider extends AIProvider {
  constructor(apiKey) {
    super();
    this.client = new GoogleGenAI({ apiKey });
    
    this.geminiSchema = {
      type: "OBJECT",
      properties: {
        brands_mentioned: { type: "ARRAY", items: { type: "STRING" } },
        competitors_mentioned: { type: "ARRAY", items: { type: "STRING" } },
        ranked_list: { type: "ARRAY", items: { type: "STRING" } },
        recommendations: { type: "ARRAY", items: { type: "STRING" } },
        confidence: { type: "NUMBER" }
      },
      required: ["brands_mentioned", "competitors_mentioned", "ranked_list", "recommendations", "confidence"]
    };
  }

  get name() { return "Google (Gemini-2.5-Flash-Lite)"; }
  get keyPrefix() { return "gemini"; }

  async generateStructured(promptText) {
    const response = await this.client.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: this.geminiSchema,
        temperature: 0
      }
    });
    
    const text = response.text;
    const json = JSON.parse(text);
    return validateOutput(json).success ? json : (() => { throw new Error("Invalid schema from Gemini"); })();
  }
}

class ClaudeProvider extends AIProvider {
  constructor(apiKey) {
    super();
    this.client = new Anthropic({ apiKey });
  }

  get name() { return "Anthropic (Claude-3-5-Haiku)"; }
  get keyPrefix() { return "claude"; }

  async generateStructured(promptText) {
    const response = await this.client.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 500,
      temperature: 0,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: promptText }]
    });
    
    let text = response.content[0].text;
    if (text.startsWith('\`\`\`json')) text = text.replace(/^\`\`\`json\n/, '').replace(/\n\`\`\`$/, '');
    
    const json = JSON.parse(text);
    return validateOutput(json).success ? json : (() => { throw new Error("Invalid schema from Claude"); })();
  }
}

module.exports = { AIProvider, OpenAIProvider, GeminiProvider, ClaudeProvider };
