---
lang: es
title: Task Manager App
description: Aplicación de gestión de tareas con sincronización en tiempo real, categorías, recordatorios y colaboración en equipo.
year: 2024
status: completed
tags: [Angular, TypeScript, Firebase, RxJS]
highlights:
  - Arquitectura reactiva con RxJS para sincronización en tiempo real
  - Offline-first con IndexedDB y estrategia de sincronización
  - Implementación de WCAG 2.1 AA en toda la UI
github: https://github.com/BMACF12
featured: true
order: 1
---

## Contexto

Una aplicación web para gestionar tareas diarias con enfoque en productividad personal y de equipos pequeños.

## Desafíos técnicos

- Sincronización en tiempo real entre múltiples clientes sin conflictos de estado.
- Soporte offline-first con resolución de conflictos al reconectar.
- Accesibilidad completa: navegación por teclado, lectores de pantalla y contraste AA.

## Qué aprendí

El estado compartido en tiempo real requiere pensar en el modelo de datos antes que en la UI. RxJS permitió modelar el flujo de cambios como streams declarativos.

> **Placeholder:** Este contenido se reemplazará con la evidencia real del proyecto (capturas, métricas y demo).
