# AI Visibility Engine Complete Upgrade Plan

This plan addresses all 10 phases of the requested AI Visibility Engine audit, correction, and upgrade. The goal is to enforce multi-model architecture, eliminate hidden dependencies, improve metric quality, and provide complete debug transparency.

## User Review Required
> [!IMPORTANT]
> - **Database Schema**: I will perform a Prisma schema migration to replace the generic `QueryResult` table with structured `PromptResponse` and `ScanReport` tables. This will drop old scan data. Since you requested a fresh environment earlier, I assume this is acceptable, but please confirm.
> - **Cost Impact**: We will run 4 prompts against 2 providers (8 raw generations), followed by 8 normalization queries (4 to OpenAI structured, 4 to Gemini structured). This totals 16 LLM API calls per scan. While we use `gpt-4o-mini` or `gemini-2.5-flash` to keep costs low, this increases the compute time per scan.

## Open Questions
- Do you want to use `gpt-4o-mini` instead of `gpt-4o` for the normalization stage to keep costs down given the 4x multiplier on prompt volume? (I will plan to use `gpt-4o-mini` for raw/norm if not specified otherwise to manage costs, but will strictly follow the provided architecture).

## Proposed Changes

### Database Layer
#### [MODIFY] prisma/schema.prisma
- Remove `QueryResult` model.
- Add `PromptResponse` model to satisfy Phase 2 (Separate Provider Storage) and Phase 7 (Multi-Prompt Evaluation):
  - Fields: `promptId`, `openai_raw_response`, `gemini_raw_response`, `openai_normalized_json`, `gemini_normalized_json`, `openai_processing_time`, `gemini_processing_time`, `openai_status`, `gemini_status`.
- Add `ScanReport` model to satisfy Phase 9 (Scan Report):
  - Fields: `openaiFindings`, `geminiFindings`, `brandMentions`, `competitorMentions`, `visibilityScoreBreakdown`, `sovBreakdown`, `recommendationBreakdown`, `confidenceScores`.

### Worker Layer
#### [MODIFY] workers/ai-scanner/index.js
- Implement the 4 prompts defined in Phase 7.
- Parallelize execution to query OpenAI and Gemini for all 4 prompts.
- Implement independent normalization (Phase 3). OpenAI raw text will be normalized using `openai.chat.completions.create` (with structured outputs). Gemini raw text will be normalized using `gemini.models.generateContent` passing the JSON schema to ensure no dependency on OpenAI.
- Track processing times and execution status (Phase 2).
- Update the payload sent to `/api/scans/results`.

### API & Core Logic
#### [MODIFY] src/app/api/scans/results/route.ts
- Refactor to accept the new `PromptResponse` payloads and calculate the aggregated metrics across all 8 JSON results.
- Create the final `ScanReport` record in the database.

#### [MODIFY] src/lib/metrics.ts
- Implement Phase 4: Canonical Brand Matching.
- Implement Phase 5: Weighted Visibility Scoring (30% Presence, 30% Rank, 20% Rec Strength, 20% SOV).
- Implement Phase 6: Weighted Share of Voice (Rank 1=5pts, Rank 5=1pt).

### Frontend UI
#### [NEW] src/app/admin/debug-scan/[scanId]/page.tsx
- Create the Debug Transparency Layer (Phase 8).
- Display raw responses, normalized JSONs, metric inputs, visibility calculation, SOV calculation, and final values.

#### [MODIFY] src/app/dashboard/visibility/page.tsx
- Update to consume the new `ScanReport` and `PromptResponse` structures.

## Verification Plan

### Automated Tests
- Run `npm run lint` and `npx tsc --noEmit` to ensure type safety after schema updates.
- Verify `npx prisma db push` successfully updates the schema.

### Manual Verification
- Trigger a Live Scan from the dashboard.
- Observe the worker logs to verify:
  - 8 distinct generation calls (4 OpenAI, 4 Gemini).
  - 8 distinct normalization calls.
- Navigate to `/admin/debug-scan/[scanId]` to inspect the exact outputs and math.
- Provide the final Audit Report as requested in Phase 10.
