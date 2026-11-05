---
lang: en
title: Auditor IA
description: RAG system that classifies, evaluates and archives university accreditation evidence, with AI-assisted assessment and automated batch reports.
year: 2026
status: completed
tags: [Next.js, FastAPI, Python, ChromaDB, RAG, Celery]
highlights:
  - "Three-layer architecture: deterministic facts, LLM judgement and a verdict computed in code"
  - RAG with ChromaDB, Gemini embeddings and Llama 3.3 verdicts on Groq
  - Async queue with Redis + Celery and per-batch PDF reports
  - Coordinate-based PDF extraction without OCR, plus a curriculum grid rebuilt cell by cell
github: https://github.com/BMACF12/tesis
featured: true
order: 1
---

## Context

A system that audits documentary evidence for accreditation —graduate profiles, curricular projects, curriculum grids, syllabi and lab guides— against Ecuador's CACES regulations. For every PDF it produces a structured verdict, an individual report and files it under the matching indicator folder; when a batch finishes, it generates a global executive report.

## How it works

The core design separates **facts** from **judgements**:

1. **Facts (deterministic, no LLM).** PDF extraction preserving coordinates, official template verification, programme relevance and detection of empty fields. Everything verifiable is computed in code.
2. **Judgement (LLM).** The model receives the regulation retrieved from ChromaDB, the verified facts and the document. It only returns the checklist with its textual citation and a diagnosis.
3. **Verdict (deterministic).** The final result —passes, partially passes or fails— is computed with rules, not by the model.

If the document does not use the official template or belongs to another programme, **the LLM is never called**: the verdict is issued without spending tokens.

## Technical challenges

- **Hallucinations:** asking the model for facts produced false negatives —it claimed filled fields were empty—. Moving all verification into code is what makes the system trustworthy.
- **Extraction without OCR:** OCR multiplied processing time by 18 and corrupted subject codes. I used `pdfminer.six` keeping coordinates and rebuilt the curriculum grid cell by cell.
- **API quotas:** automatic retry for the per-minute limit and a pending queue for the daily limit.
- **Asynchrony:** FastAPI + Redis + Celery to process batches without blocking the UI, with pollable task status.

## Learning

An LLM performs when you ask it for **judgement**, not for **memory**. Anything verifiable should be computed in code; the model only interprets what is left.
