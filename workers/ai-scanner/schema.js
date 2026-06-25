const { z } = require("zod");

// Canonicalize strings (lowercase, alphanumeric only for exact matching)
const canonicalizeStr = (str) => {
  if (typeof str !== 'string') return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
};

const canonicalArray = z.array(z.string()).transform(arr => {
  // Map, filter empty, and deduplicate
  const mapped = arr.map(canonicalizeStr).filter(s => s.length > 0);
  return [...new Set(mapped)];
}).default([]);

const normalizedDataSchema = z.object({
  brands_mentioned: canonicalArray,
  competitors_mentioned: canonicalArray,
  ranked_list: canonicalArray,
  recommendations: z.array(z.string()).default([]), // Keep original for sentiment matching
  confidence: z.number().min(0).max(1).default(0)
});

function validateOutput(parsedJson) {
  try {
    const validated = normalizedDataSchema.parse(parsedJson);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: `Validation Error: ${error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}` };
    }
    return { success: false, error: `Validation Error: ${error.message}` };
  }
}

module.exports = {
  normalizedDataSchema,
  validateOutput
};
