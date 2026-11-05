---
lang: en
title: Vacacional Los Nanos
description: Website for a summer camp, with activities, schedules, pricing and testimonials managed from typed content.
year: 2026
status: completed
tags: [Next.js, React, TypeScript, Tailwind, Framer Motion]
highlights:
  - "Content centralised in typed TypeScript modules: activities, schedule, pricing and FAQ"
  - Framer Motion animations and components organised by section
  - Responsive design focused on conversion and direct WhatsApp contact
github: https://github.com/BMACF12/Vacacional
featured: true
order: 2
---

## Context

Website for **Vacacional Los Nanos**, a summer camp for children aged 4 to 14. The goal was a clear digital presence: which activities are offered, what a camp day looks like, how much it costs and how to sign up.

## How it is built

- **Next.js with the App Router** and TypeScript in strict mode.
- Content lives in typed modules (`config/activities.ts`, `camp.ts`, `pricing.ts`, `schedule.ts`, `testimonials.ts`, `faq.ts`), so updating prices or activities never requires touching components.
- Sections split into `components/sections`, **Framer Motion** animations and **Tailwind CSS** styling.
- Calls to action with direct WhatsApp contact.

## Technical challenges

- Modelling schedule and activities with types that prevent incomplete content when editing.
- Keeping the visual rhythm (entrance and scroll animations) without sacrificing load speed.
- Designing mobile-first, since most traffic for this kind of business comes from a phone.

## Learning

Separating content from presentation pays twice: whoever manages the site updates data safely and the code stays focused on the interface.
