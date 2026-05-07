---
name: gsap-core
description: Official GSAP skill for the core API — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion).
---

## Core Tween Methods
- **gsap.to(targets, vars)** — animate from current state to `vars`. Most common.
- **gsap.from(targets, vars)** — animate from `vars` to current state (good for entrances).
- **gsap.fromTo(targets, fromVars, toVars)** — explicit start and end.
- **gsap.set(targets, vars)** — apply immediately (duration 0).

## Common vars
- **duration** — seconds (default 0.5).
- **ease** — string or function. Prefer: `"power1.out"`, `"power3.inOut"`, `"back.out(1.7)"`.
- **stagger** — number or object: `{ amount: 0.3, from: "center" }`.
- **autoAlpha** — Prefer over `opacity` (sets `visibility: hidden` at 0).

## Transform Aliases (Prefer over raw CSS)
| GSAP property | Equivalent CSS |
|---------------|----------------|
| `x`, `y`, `z` | translateX/Y/Z |
| `rotation` | rotate |
| `scale` | scale |

## Official GSAP best practices
- ✅ Use **camelCase** for properties (`backgroundColor`).
- ✅ Prefer **transform aliases** over animating the `transform` string.
- ✅ Use **gsap.matchMedia()** for responsive and accessibility (prefers-reduced-motion).
- ❌ Animate layout properties (`width`, `top`, `left`) when transforms can be used.
