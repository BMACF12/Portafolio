---
lang: en
title: Moviliza2
description: Flutter app for safe school transport, with panels for parents, drivers and administrators, plus built-in chat.
year: 2024
status: completed
tags: [Flutter, Dart, Material Design]
highlights:
  - "Three roles with distinct flows: parents, drivers and administration"
  - Chat between parents and the driver inside the app
  - Institution and driver management from the admin panel
github: https://github.com/BMACF12/Moviliza2
featured: true
order: 3
---

## Context

A mobile app for **safe school transport**. The problem is concrete: knowing who picks up the children, coordinating with the driver and keeping the family informed without relying on scattered calls or messages.

## How it is built

- **Flutter + Dart** with Material Design, compiling to Android, iOS, web and desktop.
- Three experiences by role: **parents**, **drivers** and **administration**.
- Admin panel with institution and driver management plus detail screens.
- Built-in chat between parents and the driver.
- Screens organised by role (`screen_padres`, `screen_administrador`) and a centralised theme.

## Technical challenges

- Sharing one data model across three roles without duplicating screens or logic.
- Clear navigation in an app with many flows: sign-up, tracking, chat and administration.
- Keeping the interface readable on small screens and for non-technical users.

## Learning

In multi-role apps, architecture is defined by permissions rather than screens: once the role decides what is visible and allowed, the rest of the navigation tree organises itself.
