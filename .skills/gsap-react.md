---
name: gsap-react
description: Official GSAP skill for React — useGSAP hook, refs, gsap.context(), cleanup.
---

## useGSAP() Hook
Always prefer the `useGSAP()` hook over `useEffect()`.

```javascript
import { useGSAP } from "@gsap/react";

useGSAP(() => {
  gsap.to(".box", { x: 100 });
}, { scope: containerRef });
```

## Best Practices
- ✅ Use **refs** for targets.
- ✅ Pass a **scope** (ref) to `useGSAP` so selectors are scoped.
- ✅ Use **contextSafe** for callbacks in event handlers (pointer events, etc.).
- ✅ Run GSAP only on the client; avoid during SSR.

## Official GSAP best practices
- ✅ Revert animations and ScrollTriggers on unmount (handled by `useGSAP`).
- ❌ Target by selector without a scope.
- ❌ Run GSAP or ScrollTrigger during server-side rendering.
