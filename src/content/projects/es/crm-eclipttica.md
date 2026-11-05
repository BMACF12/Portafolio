---
lang: es
title: CRM Eclipttica
description: CRM interno de una agencia de marketing digital, construido en TypeScript, integrado con las APIs de Meta y potenciado con IA y RAG.
year: 2026
status: completed
tags: [TypeScript, Meta Developer, WhatsApp API, RAG, IA]
highlights:
  - Desarrollo y soporte del CRM interno de la empresa, construido en TypeScript
  - Integración con Meta Developer y WhatsApp para centralizar leads y conversaciones
  - Asistente con IA sobre una base de conocimiento RAG para el equipo comercial
  - "Soporte a usuarios: incidencias, mejoras y nuevas funcionalidades"
featured: true
order: 6
---

## Contexto

Eclipttica es una agencia de marketing digital. Su operación comercial necesitaba centralizar leads, conversaciones y seguimiento en una sola herramienta, en lugar de repartirlos entre hojas de cálculo, bandejas de mensajes y sistemas separados.

Durante ocho meses trabajé como desarrollador y soporte del CRM propio de la empresa: una aplicación construida en **TypeScript**, con inteligencia artificial integrada y conectada a los canales de **Meta**.

## Mi rol

- Desarrollo de funcionalidades sobre el CRM, de la interfaz a la lógica de negocio.
- Soporte directo al equipo comercial: incidencias, dudas y mejoras del día a día.
- Integración con las APIs de Meta y WhatsApp para la entrada de leads y mensajes.
- Implementación de funcionalidades de IA apoyadas en una base de conocimiento con RAG.

## Cómo funciona

**Canales de entrada.** Los leads llegan desde las plataformas de Meta y desde WhatsApp. La integración traduce esos eventos en registros del CRM, de modo que el equipo comercial trabaja sobre una sola bandeja y no sobre cinco pestañas.

**Asistente con IA.** El CRM incorpora un asistente que responde con información real de la agencia: servicios, procesos y campañas. La respuesta se construye con **RAG**: se recuperan los fragmentos relevantes de una base de conocimiento y se entregan como contexto al modelo, en lugar de dejar que improvise.

**Operación diaria.** Seguimiento de oportunidades, historial de conversaciones y tareas del equipo comercial en una interfaz única.

## Retos técnicos

- **APIs de Meta:** permisos, tokens y webhooks. La integración tenía que seguir funcionando aunque un token caducara o un evento llegara duplicado.
- **IA que no invente:** con RAG, el asistente se limita a lo que está documentado; cuando la base de conocimiento no cubre una pregunta, es mejor que lo diga.
- **Soporte en producción:** atender incidencias reales mientras se seguían desarrollando funcionalidades obliga a priorizar y a no romper lo que ya usa el equipo.
- **TypeScript como red de seguridad:** tipar los datos que vienen de APIs externas fue clave para detectar errores antes de que llegaran al usuario.

## Aprendizaje

Un CRM no se construye alrededor de la base de datos, sino de las conversaciones. Y una función de IA solo es útil cuando está conectada a información verificable de la empresa.

> El código es propiedad de la empresa, por eso este proyecto no tiene repositorio público.
