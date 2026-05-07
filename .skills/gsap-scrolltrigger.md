---
name: gsap-scrolltrigger
description: Official GSAP skill for ScrollTrigger — scroll-linked animations, pinning, scrub, triggers.
---

## Registering
```javascript
gsap.registerPlugin(ScrollTrigger);
```

## Basic Configuration
```javascript
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom center",
    scrub: true,
    pin: true,
    toggleActions: "play reverse play reverse"
  },
  x: 500
});
```

## Key Properties
- **trigger**: Element that starts the trigger.
- **start / end**: `"triggerPosition viewportPosition"` (e.g., `"top bottom"`).
- **scrub**: Link animation progress to scroll. `true` or seconds (lag).
- **pin**: Pin the element while active.
- **markers**: Set to `true` for development debugging.

## Official GSAP best practices
- ✅ Call **ScrollTrigger.refresh()** after DOM/layout changes.
- ✅ Create ScrollTriggers in the order they appear on the page (top to bottom).
- ✅ Use **containerAnimation** for "fake" horizontal scroll (requires `ease: "none"`).
- ❌ Put ScrollTrigger on a child tween in a timeline; put it on the timeline itself.
- ❌ Use **scrub** and **toggleActions** together; choose one.
