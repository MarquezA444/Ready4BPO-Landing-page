---
name: gsap-timeline
description: Official GSAP skill for timelines — gsap.timeline(), position parameter, nesting.
---

## Creating a Timeline
```javascript
const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });
tl.to(".a", { x: 100 })
  .to(".b", { y: 50 }, "-=0.2") // start 0.2s before previous ends
  .addLabel("outro")
  .to(".c", { opacity: 0 }, "outro+=0.5");
```

## Position Parameter
- **Absolute**: `1` (at 1 second).
- **Relative**: `"+=0.5"`, `"-=0.2"`.
- **Labels**: `"intro"`, `"intro+=0.3"`.
- **Sync**: `"<"` (start with previous), `">"` (start after previous).

## Official GSAP best practices
- ✅ Use **defaults** in the timeline constructor.
- ✅ Use **labels** for readable sequencing.
- ✅ Put ScrollTrigger on the timeline, not on child tweens.
- ❌ Chain animations with `delay` instead of using a timeline.
