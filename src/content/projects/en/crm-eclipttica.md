---
lang: en
title: Eclipttica CRM
description: In-house CRM for a digital marketing agency, built in TypeScript, integrated with Meta APIs and powered by AI and RAG.
year: 2026
status: completed
tags: [TypeScript, Meta Developer, WhatsApp API, RAG, AI]
highlights:
  - Development and support of the company's in-house CRM, built in TypeScript
  - Meta Developer and WhatsApp integration to centralise leads and conversations
  - AI assistant backed by a RAG knowledge base for the sales team
  - "User support: incidents, improvements and new features"
featured: true
order: 6
---

## Context

Eclipttica is a digital marketing agency. Its sales operation needed to centralise leads, conversations and follow-up in a single tool, instead of spreading them across spreadsheets, message inboxes and separate systems.

For eight months I worked as developer and support on the company's in-house CRM: an application built in **TypeScript**, with integrated artificial intelligence and connected to **Meta** channels.

## My role

- Feature development across the CRM, from the interface to the business logic.
- Direct support to the sales team: incidents, questions and day-to-day improvements.
- Integration with Meta and WhatsApp APIs for incoming leads and messages.
- AI features backed by a knowledge base with RAG.

## How it works

**Inbound channels.** Leads arrive from Meta platforms and WhatsApp. The integration turns those events into CRM records, so the sales team works from one inbox instead of five tabs.

**AI assistant.** The CRM includes an assistant that answers with real agency information: services, processes and campaigns. The answer is built with **RAG**: relevant fragments are retrieved from a knowledge base and passed to the model as context, instead of letting it improvise.

**Daily operation.** Opportunity tracking, conversation history and sales tasks in a single interface.

## Technical challenges

- **Meta APIs:** permissions, tokens and webhooks. The integration had to keep working even when a token expired or an event arrived twice.
- **AI that does not make things up:** with RAG, the assistant sticks to what is documented; when the knowledge base does not cover a question, it is better for it to say so.
- **Support in production:** handling real incidents while still shipping features forces you to prioritise and avoid breaking what the team already relies on.
- **TypeScript as a safety net:** typing data coming from external APIs was key to catching errors before they reached the user.

## Learning

A CRM is not built around the database, but around conversations. And an AI feature is only useful when it is connected to verifiable company information.

> The code is owned by the company, which is why this project has no public repository.
