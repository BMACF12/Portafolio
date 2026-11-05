---
lang: en
title: WhatsApp Reminders
description: Python automation that syncs activities from Google Drive and sends WhatsApp Business (Meta) reminders without duplicates.
year: 2026
status: completed
tags: [Python, Meta Developer, WhatsApp API, Google Drive API, SQLite, Ollama]
highlights:
  - Meta Developer and WhatsApp Business Cloud API integration
  - Automatic reminders at 48 h, 24 h, 2 h and at the deadline
  - SQLite deduplication so no message is sent twice
  - Fixed templates or local Ollama, with automatic fallback when the model fails
  - DRY_RUN mode to test the whole flow without sending real messages
github: https://github.com/BMACF12/Notificaciones_Automatizadas
featured: false
order: 5
---

## Context

Activities with deadlines get forgotten. This project automates the follow-up of a shared spreadsheet and notifies each owner on WhatsApp before the delivery date.

## How it works

1. Finds `ACTIVIDADES_2026.xlsx` in Google Drive and downloads it with the **Drive API**.
2. Reads the activities sheet and computes pending reminders.
3. Prevents duplicates with **SQLite**: every sent notification is recorded.
4. Generates the message from a fixed template or with local **Ollama**.
5. Sends it through Meta's **WhatsApp Business Cloud API**.

## Technical challenges

- **Meta API:** organisation-initiated messages require approved templates and a verified number; the flow was designed around that constraint.
- OAuth authentication with Google Drive and credential renewal without manual steps.
- Idempotency: the process runs continuously, so the SQLite state is what prevents repeated messages.
- Optional AI: if Ollama is unavailable or fails, the system falls back to the fixed template instead of breaking.
- A `DRY_RUN` mode to validate the entire flow without sending anything real.

## Learning

Automation is not just wiring APIs together: it is designing what happens when something fails. Fallbacks and idempotency are what make a self-running process reliable.
