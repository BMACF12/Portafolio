---
lang: es
title: Centro AYRE
description: Sitio web del Centro AYRE con servicios de desarrollo infantil, secciones informativas y formularios validados para captar pacientes.
year: 2025
status: completed
tags: [Next.js, TypeScript, Tailwind, React Hook Form, Zod]
highlights:
  - Formularios con React Hook Form + Zod y retroalimentación con Sonner
  - Animaciones con Framer Motion y secciones modulares por servicio
  - Metadatos y SEO configurados con la API de Next.js
github: https://github.com/BMACF12/Ayre-Web
featured: false
order: 4
---

## Contexto

Sitio web para el **Centro AYRE**, dedicado al desarrollo infantil, psicología y estimulación en Quito. Necesitaban explicar sus servicios con claridad y recibir solicitudes de contacto sin fricción.

## Cómo está construido

- **Next.js + TypeScript** con App Router y componentes por sección: hero, propósito, servicios destacados, estadísticas, testimonios y cierre con llamado a la acción.
- **Tailwind CSS** para el sistema visual y **Framer Motion** para las animaciones.
- Formularios con **React Hook Form + Zod**, validación tipada y avisos con **Sonner**.
- Íconos con `lucide-react` y metadatos por página para SEO.

## Retos técnicos

- Traducir un servicio sensible (salud infantil) a un tono cálido sin perder claridad.
- Validar formularios en cliente y servidor con el mismo esquema.
- Equilibrar animaciones y accesibilidad para familias que navegan desde el móvil.

## Aprendizaje

Un formulario bien validado no es un detalle técnico: es parte de la experiencia. Zod centraliza las reglas y evita mensajes contradictorios entre cliente y servidor.
