---
name: gsap-performance
description: Official GSAP skill for performance — prefer transforms, avoid layout thrashing.
---

## Best Practices
- ✅ Animate **transform** (`x`, `y`, `scale`, `rotation`) and **opacity**.
- ✅ Use **will-change** in CSS only on animating elements.
- ✅ Use **gsap.quickTo()** for frequently updated properties (mouse followers).
- ✅ Use **stagger** instead of many separate tweens.
- ✅ Clean up or kill off-screen animations.

## Do Not
- ❌ Animate `width`, `height`, `top`, `left` for movement.
- ❌ Ignore cleanup (revert context).
- ❌ Set `will-change` on every element.
