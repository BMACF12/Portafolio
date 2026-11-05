---
lang: es
title: Recordatorios por WhatsApp
description: Automatización en Python que sincroniza actividades desde Google Drive y envía recordatorios por WhatsApp Business (Meta) sin duplicados.
year: 2026
status: completed
tags: [Python, Meta Developer, WhatsApp API, Google Drive API, SQLite, Ollama]
highlights:
  - Integración con Meta Developer y la WhatsApp Business Cloud API
  - Recordatorios automáticos a 48 h, 24 h, 2 h y al vencimiento
  - Deduplicación con SQLite para no repetir mensajes
  - Plantillas fijas u Ollama local, con fallback automático si el modelo falla
  - Modo DRY_RUN para probar sin enviar mensajes reales
github: https://github.com/BMACF12/Notificaciones_Automatizadas
featured: false
order: 5
---

## Contexto

Las actividades con fecha límite se olvidan. Este proyecto automatiza el seguimiento de una hoja de cálculo compartida y avisa a cada responsable por WhatsApp antes de que venza la entrega.

## Cómo funciona

1. Busca el archivo `ACTIVIDADES_2026.xlsx` en Google Drive y lo descarga con la **Drive API**.
2. Lee la hoja de actividades y calcula los recordatorios pendientes.
3. Evita duplicados con **SQLite**: cada aviso enviado queda registrado.
4. Genera el mensaje con una plantilla fija o con **Ollama** local.
5. Envía por la **WhatsApp Business Cloud API** de Meta.

## Retos técnicos

- **API de Meta:** los mensajes iniciados por la organización requieren plantillas aprobadas y un número verificado; el flujo se diseñó alrededor de esa restricción.
- Autenticación OAuth con Google Drive y renovación de credenciales sin intervención manual.
- Idempotencia: el proceso corre de forma continua, así que el estado en SQLite es lo que impide repetir mensajes.
- IA opcional: si Ollama no está disponible o falla, el sistema vuelve a la plantilla fija en lugar de romperse.
- Un modo `DRY_RUN` para validar todo el flujo sin enviar nada real.

## Aprendizaje

Automatizar no es solo conectar APIs: es diseñar qué pasa cuando algo falla. El fallback y la idempotencia son lo que vuelve confiable a un proceso que corre solo.
