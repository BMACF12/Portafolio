---
lang: es
title: Moviliza2
description: App Flutter de transporte escolar seguro, con paneles para padres, transportistas y administradores, más chat integrado.
year: 2024
status: completed
tags: [Flutter, Dart, Material Design]
highlights:
  - "Tres roles con flujos diferenciados: padres, transportistas y administración"
  - Chat entre padres y transportista dentro de la misma app
  - Gestión de instituciones y transportistas desde el panel administrador
github: https://github.com/BMACF12/Moviliza2
featured: true
order: 3
---

## Contexto

Aplicación móvil de **transporte escolar seguro**. El problema que resuelve es concreto: saber quién recoge a los niños, coordinar con el transportista y mantener informada a la familia sin depender de llamadas o mensajes sueltos.

## Cómo está construida

- **Flutter + Dart** con Material Design, compilando a Android, iOS, web y escritorio.
- Tres experiencias según el rol: **padres**, **transportistas** y **administración**.
- Panel administrador con gestión de instituciones, transportistas y sus detalles.
- Chat integrado entre padres y transportista.
- Organización por carpetas de pantallas (`screen_padres`, `screen_administrador`) y tema propio centralizado.

## Retos técnicos

- Compartir un mismo modelo de datos entre tres roles sin duplicar pantallas ni lógica.
- Navegación clara en una app con muchos flujos: registro, seguimiento, chat y administración.
- Mantener una interfaz legible en pantallas pequeñas y con usuarios no técnicos.

## Aprendizaje

En apps multirol, la arquitectura se define por los permisos y no por las pantallas: cuando el rol determina qué se ve y qué se puede hacer, el resto del árbol de navegación se ordena solo.
