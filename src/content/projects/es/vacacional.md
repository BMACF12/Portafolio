---
lang: es
title: Vacacional Los Nanos
description: Sitio web para un campamento vacacional, con actividades, horarios, precios y testimonios gestionados desde contenido tipado.
year: 2026
status: completed
tags: [Next.js, React, TypeScript, Tailwind, Framer Motion]
highlights:
  - "Contenido centralizado en módulos TypeScript tipados: actividades, horarios, precios y FAQ"
  - Animaciones con Framer Motion y componentes organizados por secciones
  - Diseño responsive orientado a conversión y contacto directo por WhatsApp
github: https://github.com/BMACF12/Vacacional
featured: true
order: 2
---

## Contexto

Sitio web para **Vacacional Los Nanos**, un campamento vacacional para niños de 4 a 14 años. El objetivo era tener una presencia digital clara: qué actividades se ofrecen, cómo es un día de campamento, cuánto cuesta y cómo inscribirse.

## Cómo está construido

- **Next.js con App Router** y TypeScript en modo estricto.
- El contenido vive en módulos tipados (`config/activities.ts`, `camp.ts`, `pricing.ts`, `schedule.ts`, `testimonials.ts`, `faq.ts`), de modo que actualizar precios o actividades no obliga a tocar componentes.
- Secciones separadas en `components/sections`, animaciones con **Framer Motion** y estilos con **Tailwind CSS**.
- Llamados a la acción con contacto directo por WhatsApp.

## Retos técnicos

- Modelar horarios y actividades con tipos que impidieran dejar campos incompletos al editar contenido.
- Mantener el ritmo visual (animaciones de entrada, scroll) sin sacrificar velocidad de carga.
- Diseñar una jerarquía móvil primero, porque la mayoría del tráfico de este tipo de negocios llega desde el teléfono.

## Aprendizaje

Separar el contenido de la presentación paga doble: quien administra el sitio actualiza datos sin miedo y el código se queda enfocado en la interfaz.
