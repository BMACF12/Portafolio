---
lang: es
title: Auditor IA
description: Sistema RAG que clasifica, evalúa y archiva evidencias de acreditación universitaria, con dictamen asistido por IA y reportes automáticos por lote.
year: 2026
status: completed
tags: [Next.js, FastAPI, Python, ChromaDB, RAG, Celery]
highlights:
  - "Arquitectura de 3 capas: hechos deterministas, juicio del LLM y veredicto en código"
  - RAG con ChromaDB, embeddings de Gemini y dictamen con Llama 3.3 en Groq
  - Cola asíncrona con Redis + Celery y reportes PDF por lote
  - Extracción de PDFs por coordenadas, sin OCR, y malla curricular reconstruida celda por celda
github: https://github.com/BMACF12/tesis
featured: true
order: 1
---

## Contexto

Sistema que audita evidencias documentales de acreditación —perfiles de egreso, proyectos curriculares, mallas, sílabos y guías de laboratorio— contra la normativa CACES de Ecuador. Por cada PDF entrega un dictamen estructurado, un reporte individual y lo archiva en la carpeta del indicador que le corresponde; al terminar un lote genera un reporte ejecutivo global.

## Cómo funciona

El diseño central separa **hechos** de **juicios**:

1. **Hechos (determinista, sin LLM).** Extracción del PDF conservando coordenadas, verificación de la plantilla oficial, pertinencia a la carrera y detección de campos sin llenar. Todo lo verificable se calcula en código.
2. **Juicio (LLM).** El modelo recibe la norma recuperada de ChromaDB, los hechos ya verificados y el documento. Devuelve únicamente el checklist con su cita textual y un diagnóstico.
3. **Veredicto (determinista).** El resultado final —cumple, cumple parcialmente o no cumple— se calcula con reglas, no con el modelo.

Si el documento no usa la plantilla oficial o pertenece a otra carrera, **el LLM no se llama**: el dictamen se emite sin gastar tokens.

## Retos técnicos

- **Alucinaciones:** pedirle hechos al modelo producía falsos negativos —declaraba vacíos campos que estaban llenos—. Mover toda la verificación a código fue la decisión que sostiene el sistema.
- **Extracción sin OCR:** el OCR multiplicaba por 18 el tiempo y degradaba códigos de asignatura. Se trabajó con `pdfminer.six` conservando coordenadas y la malla se reconstruyó celda por celda.
- **Cuotas de API:** reintento automático para el límite por minuto y cola de pendientes para el límite diario.
- **Asincronía:** FastAPI + Redis + Celery para procesar lotes sin bloquear la interfaz, con estado consultable por polling.

## Aprendizaje

Un LLM rinde cuando se le pide **juicio**, no cuando se le pide **memoria**. Todo lo que se puede verificar debe calcularse en código; el modelo solo interpreta lo que queda.
