/**
 * Deterministic AI Visibility Metrics Engine (Upgraded)
 * 
 * Calculates metrics from multi-prompt, multi-model outputs.
 */

export interface NormalizedData {
  brands_mentioned: string[];
  competitors_mentioned: string[];
  recommendations: string[];
  ranked_list: string[];
  confidence: number;
}

export interface PromptResponsePayload {
  promptId: string;
  openai_raw_response: string | null;
  gemini_raw_response: string | null;
  openai_normalized_json: NormalizedData | null;
  gemini_normalized_json: NormalizedData | null;
  openai_processing_time: number | null;
  gemini_processing_time: number | null;
  openai_status: string | null;
  gemini_status: string | null;
}

export interface ScanReportData {
  openaiFindings: any;
  geminiFindings: any;
  brandMentions: any;
  competitorMentions: any;
  visibilityScoreBreakdown: any;
  sovBreakdown: any;
  recommendationBreakdown: any;
  confidenceScores: any;
}

// Phase 4: Data Validation (Canonical Brand Matching)
function normalizeStr(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]/g, ''); // alphanumeric only
}

function getCanonicalBrand(brandOrUrl: string): string {
  let canonical = brandOrUrl.toLowerCase().trim();
  // Strip http/https and www
  canonical = canonical.replace(/^https?:\/\/(www\.)?/, '');
  // Strip path
  canonical = canonical.split('/')[0];
  // Strip TLD if present to get core brand
  canonical = canonical.split('.')[0];
  return canonical;
}

export function isBrandMatch(mentionedItem: string, targetBrandOrUrl: string): boolean {
  const target = normalizeStr(getCanonicalBrand(targetBrandOrUrl));
  const item = normalizeStr(mentionedItem);
  return item.includes(target);
}

// Phase 5 & 6 & 9: Complete Scan Report Generation
export function generateScanReport(
  responses: PromptResponsePayload[],
  domainUrl: string,
  competitors: { url: string }[] = []
): { visibilityScore: number, reportData: ScanReportData } {

  const brandMentions = { total: 0, sources: [] as string[] };
  const competitorMentions: Record<string, number> = {};
  competitors.forEach(c => competitorMentions[c.url] = 0);

  const confidenceScores = { openai: [] as number[], gemini: [] as number[] };

// Helper to process points for a specific model's responses
  const processModelResponses = (modelKey: 'openai' | 'gemini') => {
    let mentionPresencePoints = 0;
    let rankingPositionPoints = 0;
    let recommendationPoints = 0;
    let brandMentionsCount = 0;
    const compMentionsCount: Record<string, number> = {};
    competitors.forEach(c => compMentionsCount[c.url] = 0);
    const globalMentions = new Set<string>();

    const modelResponses = responses.map(r => 
      modelKey === 'openai' ? r.openai_normalized_json : r.gemini_normalized_json
    ).filter(Boolean) as NormalizedData[];

    const maxMentionPoints = modelResponses.length * 1; 
    const maxRankingPoints = modelResponses.length * 5; 
    const maxRecommendationPoints = modelResponses.length * 2; 

    modelResponses.forEach(data => {
      data.brands_mentioned.forEach(b => globalMentions.add(normalizeStr(b)));
      data.competitors_mentioned.forEach(c => globalMentions.add(normalizeStr(c)));
      data.ranked_list.forEach(c => globalMentions.add(normalizeStr(c)));

      const hasMention = data.brands_mentioned.some(b => isBrandMatch(b, domainUrl)) || 
                         data.ranked_list.some(r => isBrandMatch(r, domainUrl));

      if (hasMention) {
        brandMentionsCount += 1;
        mentionPresencePoints += 1;
      }

      competitors.forEach(comp => {
        if (data.brands_mentioned.some(b => isBrandMatch(b, comp.url)) || 
            data.ranked_list.some(r => isBrandMatch(r, comp.url))) {
          compMentionsCount[comp.url] += 1;
        }
      });

      let brandRank = -1;
      for (let i = 0; i < data.ranked_list.length; i++) {
        if (isBrandMatch(data.ranked_list[i], domainUrl)) {
          brandRank = i + 1;
          break;
        }
      }
      
      if (brandRank > 0 && brandRank <= 5) {
        rankingPositionPoints += (6 - brandRank);
      }

      if (hasMention) {
        for (const rec of data.recommendations) {
          const lowerRec = rec.toLowerCase();
          if (lowerRec.includes("highly") || lowerRec.includes("best") || lowerRec.includes("top")) {
            recommendationPoints += 2;
          } else if (lowerRec.includes("avoid") || lowerRec.includes("not recommended")) {
            recommendationPoints -= 2;
          } else if (isBrandMatch(lowerRec, domainUrl)) {
            recommendationPoints += 1;
          }
        }
      }
    });

    let totalMarketMentions = globalMentions.size;
    const totalTrackedMentions = brandMentionsCount + Object.values(compMentionsCount).reduce((a, b) => a + b, 0);
    if (totalMarketMentions < totalTrackedMentions) totalMarketMentions = totalTrackedMentions;
    if (totalMarketMentions === 0 && brandMentionsCount > 0) totalMarketMentions = brandMentionsCount;
    
    let brandSOV = totalMarketMentions > 0 ? brandMentionsCount / totalMarketMentions : 0;

    const mentionPct = maxMentionPoints > 0 ? Math.min(1, mentionPresencePoints / maxMentionPoints) : 0;
    const rankingPct = maxRankingPoints > 0 ? Math.min(1, rankingPositionPoints / maxRankingPoints) : 0;
    const recPct = maxRecommendationPoints > 0 ? Math.max(0, Math.min(1, recommendationPoints / maxRecommendationPoints)) : 0;

    const score = Math.round(
      (mentionPct * 30) + 
      (rankingPct * 30) + 
      (recPct * 20) + 
      (brandSOV * 20)
    );

    return {
      score,
      breakdown: { mentionPct, rankingPct, recPct, sovPct: brandSOV, mentionPoints: mentionPresencePoints, rankingPoints: rankingPositionPoints, recommendationPoints }
    };
  };

  const openaiMetrics = processModelResponses('openai');
  const geminiMetrics = processModelResponses('gemini');

  // Maintain backwards compatibility by providing a combined report format, but enriched with specific scores
  const visibilityScore = Math.round((openaiMetrics.score + geminiMetrics.score) / 2) || 0;

  const reportData: ScanReportData = {
    openaiFindings: responses.filter(r => r.openai_normalized_json).map(r => ({ promptId: r.promptId, data: r.openai_normalized_json })),
    geminiFindings: responses.filter(r => r.gemini_normalized_json).map(r => ({ promptId: r.promptId, data: r.gemini_normalized_json })),
    brandMentions: { total: 0, sources: [] }, // Kept for backwards compatibility if needed by frontend
    competitorMentions: {}, // Kept for backwards compatibility
    visibilityScoreBreakdown: {
      openai: openaiMetrics.breakdown,
      gemini: geminiMetrics.breakdown
    },
    sovBreakdown: {}, // Deprecated top-level
    recommendationBreakdown: {}, // Deprecated top-level
    confidenceScores: {
      openai: 0,
      gemini: 0
    },
    providerScores: {
      openai: openaiMetrics.score,
      gemini: geminiMetrics.score
    }
  };

  return { visibilityScore, reportData };
}

export function calculateTrendScore(historicalVisibilityScores: number[]): number {
  if (historicalVisibilityScores.length < 2) return 0;
  const current = historicalVisibilityScores[historicalVisibilityScores.length - 1];
  const previous = historicalVisibilityScores[historicalVisibilityScores.length - 2];
  return current - previous;
}
