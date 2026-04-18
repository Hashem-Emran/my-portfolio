# Home Hero — Premium Dark-Minimal Redesign

**Status:** Design approved, pending implementation plan
**Date:** 2026-04-18
**Author:** Hashem Emran (designed collaboratively with Claude)
**Branch:** `redesign/hero-premium-dark`

## Summary

Redesign the Home hero to feel like an award-level portfolio — premium, cinematic, and professional — while establishing the shared design foundations (typography, color tokens, smooth scroll, grain overlay) that the rest of the site will adopt in later page-by-page refreshes.

The aesthetic is a deliberate hybrid: dark futuristic tech meets clean minimal structure. Think Linear / Vercel / Arc Browser — not Awwwards-maximalist, not cyberpunk, not brutalist. Restraint over stacked effects.

The hero becomes a full-viewport, layered-asymmetric composition where the display name "HASHEM EMRAN" acts as a scale anchor and the portrait intersects the typography on a z-axis. Motion is cinematic-curated: one orchestrated entry sequence, subtle scroll-linked parallax, and a drifting ambient glow — each effect earns its place.

## Goals

- Replace the current Home hero with a layered-asymmetric composition that feels premium, cinematic, and personal.
- Establish shared design foundations (color tokens, typography system, smooth scroll, grain overlay) as additive Tailwind config + utility modules, so later pages can adopt them without breaking.
- Fix the broken CV download (currently points to `/path/to/your/cv.pdf`) and wire it to the real file.
- Clean up stray exploratory files (`Test.js`, `Testing.js`, duplicate CV) that aren't referenced.
- Respect `prefers-reduced-motion` and maintain baseline accessibility (keyboard focus, contrast).

## Non-goals

- Redesigning About / Projects / Technologies / Contact pages (deferred to future page-by-page specs).
- Redesigning Header or Footer components — they stay unchanged for now and may look slightly inconsistent against the new hero until future specs address them. Acceptable given scope.
- Killing light-mode site-wide. The new hero is dark-only by design; existing pages keep their current `dark:` class-based light/dark toggle. The broader "dark-only vs keep toggle" decision is deferred.
- Adding new content sections to Home (hero is the only content on Home for now).
- Changing routing structure or `Details.js` data schema.

## Design direction

Premium dark-minimal. Depth and atmosphere built through subtle gradients, soft glow, and grain — never neon, never flashy. A single dual-stop accent gradient (indigo → violet) used sparingly. Every surface has a gradient, glow, or border — no flat blocks.

## Composition

The hero fills 100vh. A 12-column grid drives the asymmetry. Described as a wireframe:

```
 ┌───────────────────────────────────────────────────────────────┐
 │ [ logo / nav — unchanged Header ]                             │
 │                                                               │
 │   ·  01 / Introduction            ← small mono label, top-L   │
 │                                                               │
 │                      ┌───────────────────┐                    │
 │   HASHEM             │                   │                    │
 │   EMRAN              │   portrait,       │                    │
 │       ↑ huge display │   rounded rect,   │                    │
 │       breaks grid,   │   soft glow halo, │   ← photo sits in  │
 │       tight leading  │   slight tilt     │     cols 8–12,     │
 │                      │                   │     overlaps the   │
 │                      └───────────────────┘     "N" of EMRAN   │
 │                                                               │
 │   Data Science | Full-Stack Developer                         │
 │   ↑ tagline in Satoshi, pipe in accent color                  │
 │                                                               │
 │   [ Download CV ]   [ View Work ↓ ]                           │
 │   ↑ primary glow    ↑ ghost / outline                         │
 │                                                               │
 │   ·  scroll ↓                                    ·  based in  │
 │                                                     Morocco   │
 └───────────────────────────────────────────────────────────────┘
```

Key composition moves:

1. **Name as scale anchor.** "HASHEM EMRAN" set at `clamp(5rem, 14vw, 16rem)`, tight tracking (`-0.04em`), leading `0.85`, uppercase. Sits behind the photo on z-axis.
2. **Portrait in a rounded rectangle**, not a circle — fits layered-asymmetric better. Portrait orientation (~3:4), soft radial glow halo behind it for depth.
3. **Photo intersects "EMRAN"** — positioned so it overlaps the final letters, creating the layered z-depth illusion.
4. **Numbered section tag** `01 / Introduction` in JetBrains Mono — editorial touch, hints at sections below.
5. **Two CTAs.** Primary "Download CV" with subtle inner glow; secondary "View Work ↓" as a ghost / outline button.
6. **Bottom-corner meta.** Scroll cue left, "Based in Morocco" right. Frames the composition.

## Typography

One family (Satoshi) carries display, body, and CTAs. JetBrains Mono appears only on meta / technical labels to signal "developer" without noise.

| Role | Typeface | Size (desktop, fluid) | Weight | Treatment |
|---|---|---|---|---|
| Display name ("HASHEM EMRAN") | Satoshi Variable | `clamp(5rem, 14vw, 16rem)` | 900 | Tracking `-0.04em`, leading `0.85`, uppercase; gradient fill on "EMRAN" only |
| Tagline | Satoshi | `clamp(1.25rem, 2.2vw, 2rem)` | 500 | Sentence case; pipe `\|` separator rendered in accent color |
| CTAs | Satoshi | `1rem` | 600 | Tracking `+0.02em` |
| Meta labels | JetBrains Mono | `0.75rem` | 400 | Uppercase, tracking `+0.15em`, muted color |
| Body (later pages) | Satoshi | `1rem`–`1.125rem` | 400 | Leading `1.6` |

**Font hosting:** Self-hosted via `@fontsource-variable/satoshi` and `@fontsource/jetbrains-mono`. Deterministic, no layout shift, no runtime CDN dependency. Preload the Satoshi Variable file used for the display name to avoid FOIT/FOUT on the hero.

**Tagline source:** Uses the existing `Data Science | Full-Stack Developer` value from `src/Details.js` — no content change, just rendering.

**Gradient on name:** "HASHEM" in solid off-white (`--text-primary`); "EMRAN" gets the indigo → violet gradient fill via `background-clip: text`.

## Color & atmosphere

A tight palette, exposed as both CSS custom properties (in `src/styles/tokens.css`) and Tailwind semantic tokens (extended in `tailwind.config.js`).

**Surface stack:**

```
--bg-base       #0A0A0B    near-black with 1% warm tint (not pure black)
--bg-elevated   #121214    cards, photo frame — subtle lift
--bg-overlay    #1A1A1D    hover states, borders
```

**Text stack:**

```
--text-primary   #F4F4F5    off-white (never pure white)
--text-secondary #A1A1AA    tagline, muted body
--text-meta      #71717A    mono labels, scroll cue, location
```

**Accent — single dual-stop gradient, used deliberately:**

```
--accent-from   #6366F1    indigo-500
--accent-to     #A855F7    violet-500
--accent-glow   rgba(99, 102, 241, 0.20)   blurred 80px, used as halo behind photo
```

**Borders:**

```
--border         rgba(255, 255, 255, 0.06)
--border-hover   rgba(255, 255, 255, 0.12)
```

**Atmosphere (depth layers, from back to front):**

1. **Base background** — solid `--bg-base`.
2. **Ambient radial glow** — single soft radial gradient positioned behind and slightly offset from the photo. `--accent-glow` color, 80–120px blur. Slowly drifts position on a ~20s loop within a 30px radius. The only "alive" element in the atmosphere.
3. **Vignette** — subtle inward darkening at viewport edges via large inset `box-shadow`. Frames the composition cinematically.
4. **Content layer** — name, photo, tagline, CTAs.
5. **Film grain overlay** — fixed full-viewport SVG noise, 4% opacity, `mix-blend-mode: overlay`. Composited on GPU. Must read as texture, not visible noise.

## Motion

Cinematic-curated. Every effect has a justification — no motion for motion's sake.

**Libraries:**

- GSAP (already installed) — entry timeline.
- GSAP ScrollTrigger (new, part of GSAP) — scroll-linked parallax.
- Lenis (`@studio-freight/lenis`) — global smooth inertial scrolling.

**1. Entry sequence** (plays once on mount, total ~1.8s, all eases `power3.out`):

```
t=0.0   Ambient glow fades 0 → full opacity (1.2s)
t=0.2   "01 / Introduction" fades up (0.6s)
t=0.3   "HASHEM" reveals via line-mask (rising wipe)
t=0.45  "EMRAN" reveals via line-mask, 150ms after "HASHEM"
t=0.8   Tagline fades up, character stagger 15ms
t=1.0   CTAs fade up together, scale 0.96 → 1
t=1.1   Photo rises from below, scale 1.05 → 1, blur-off
t=1.4   Scroll cue + location fade in
```

**2. Scroll-linked effects** (ScrollTrigger, only while hero is in view):

- **Photo parallax** — translates at 0.7× scroll speed.
- **Name parallax** — translates at 1.1× scroll speed, opposite direction. Photo "rises" and name "falls" → z-axis effect.
- **Ambient glow drift** — independent 20s loop, 30px radius, continues regardless of scroll.

**3. Interaction micro-motion:**

- **No magnetic buttons** (explicit rejection — feels "trying too hard").
- **Photo tilt on hover** — subtle 3D `rotate-x`/`rotate-y` based on mouse position, max 6° each axis. Desktop only (disabled on touch and on `prefers-reduced-motion`).
- **CTA hover** — primary: inner glow intensifies (300ms ease); secondary: border brightens from `--border` to `--border-hover`.
- **Focus-visible states** — keyboard focus ring is a 2px accent gradient outline with a soft glow, visible against dark background.

**4. Reduced motion** (`prefers-reduced-motion: reduce`):

- Entry sequence collapses to a single 400ms fade-in of the whole hero.
- Parallax disabled (ScrollTrigger not initialized).
- Ambient glow drift stopped (static).
- Photo tilt disabled.
- Lenis smooth scroll falls back to native scroll.

**5. Budget:**

- Lenis ~3 KB gzipped.
- ScrollTrigger ~15 KB.
- Total motion overhead ~20 KB.
- All animations use `transform`/`opacity` only — no layout thrash.

## Component structure

Components are extracted only when they earn their keep (own state/effects, non-trivial markup, or reuse). Trivial sub-elements stay inline. Shared motion tokens and feature-specific motion orchestration are kept in separate files.

**New / refactored:**

```
src/Pages/Home.js                      orchestrator, composes Hero
src/Components/Hero/
  Hero.js                              layout grid, z-layer stacking, inline tagline
  DisplayName.js                       "HASHEM EMRAN" with gradient + line-mask reveal
  HeroPortrait.js                      rounded-rect photo, glow halo, hover tilt
  HeroActions.js                       two CTAs (Download CV, View Work)
  HeroMeta.js                          numbered tag + scroll cue + location
  AmbientGlow.js                       drifting radial-glow layer — kept very simple
  useHeroTimeline.js                   hook owning the hero-specific GSAP entry timeline
```

**Shared foundations (the "scope B" work):**

```
src/styles/tokens.css                  CSS custom properties for colors
tailwind.config.js                     extended with semantic tokens + fontFamily entries
src/lib/lenis.js                       Lenis initialization + React provider
src/lib/motion.js                      shared motion tokens only (eases, durations) — NO feature-specific code
src/Components/GrainOverlay.js         fixed SVG noise layer, mounted once in App
src/index.css                          import fonts, apply base tokens to :root
src/index.js                           wrap <App/> with LenisProvider
```

**Architectural rule:** `motion.js` contains only shared motion tokens/configs (eases, durations, reusable utilities). Feature-specific GSAP orchestration lives in its own hook (`useHeroTimeline.js` here; future sections will get their own hooks). Never mix the two.

**`HeroTagline.js` explicitly not extracted** — tagline is small enough to stay inline in `Hero.js`.

## Functional fixes bundled into this work

- **CV download.** `Home.js:73` currently points to `/path/to/your/cv.pdf` (broken). Wire the button to `/Hashem-CV.pdf`.
- **Add CV to git.** `public/Hashem-CV.pdf` is currently untracked. Commit it.
- **Delete unused files.** `src/Pages/Test.js` and `src/Pages/Testing.js` are not imported by any route or component — delete.
- **Delete duplicate CV.** `HASHEM_CV (6).pdf` at repo root is a duplicate of the one in `public/` — delete.
- **Verify before deletion.** Grep for imports of each file before removing; only delete if truly unreferenced.

## "View Work" behavior

Since the new Home contains only the hero (no Projects section inlined), "View Work" **navigates to `/projects`** via `react-router-dom`'s `<Link>` or `useNavigate`. No scroll-to-section logic needed for now. If a future spec inlines a Projects preview on Home, this behavior switches to scroll-to-section.

## Success criteria

1. Hero fills 100vh; "HASHEM EMRAN" dominates the composition; portrait intersects the "EMRAN" word on z-axis.
2. Entry sequence plays once on mount, ~1.8s total; feels smooth, not rushed.
3. Gradient fill on "EMRAN" only; "HASHEM" in solid `--text-primary`.
4. Scroll-linked parallax works both directions (down and back up); ambient glow drifts independently of scroll.
5. Download CV button downloads `/Hashem-CV.pdf` as `CV_Hashem_EMRAN.pdf`.
6. View Work button navigates to `/projects`.
7. `prefers-reduced-motion: reduce` collapses entry to a simple fade, disables parallax / glow drift / photo tilt, and falls back from Lenis to native scroll.
8. No layout shift during font load (CLS ≤ 0.05).
9. **Target Lighthouse Performance ≥ 85 on mobile, without compromising the intended visual quality or motion smoothness.** If the target conflicts with the visual design, the visual design takes precedence and the performance target is re-evaluated in a follow-up spec.
10. Works on latest Chrome, Firefox, Safari (desktop and iOS), and at widths 360, 768, 1280, 1920 px.

**Visual-quality criteria (must hold across all supported widths):**

- **360px legibility.** Hero stays visually balanced and legible at 360px width. Display name scales down gracefully via `clamp()` without overflowing; tagline and CTAs wrap sensibly without touching.
- **Tablet collision-free.** At tablet widths (768–1024px), the portrait never collides with the CTAs and never obscures the tagline. If layout pressure forces a conflict, the portrait adjusts position (shrinks or shifts) before the text does.
- **Grain imperceptibility.** The film grain overlay reads as texture, not as visible noise. If users can see individual grain particles at normal viewing distance, the opacity or tile size needs to be reduced.
- **Glow does not reduce contrast.** The ambient glow must never reduce the contrast of any text below WCAG AA (4.5:1 for body, 3:1 for display type >24px). Verified by sampling text-over-glow regions in DevTools.

## Test plan

| Category | How we verify |
|---|---|
| Visual composition | Manual review at 360 / 768 / 1280 / 1920 px widths against the composition wireframe. |
| Entry animation | Reload Home, observe sequence plays once and smoothly; refresh and confirm clean replay. `?noanim` query param skips entry for debugging. |
| Scroll effects | Scroll down slowly; photo drifts up slower than name falls; glow drifts independently. Scroll back up, verify symmetry. |
| Reduced motion | DevTools → Rendering → emulate `prefers-reduced-motion: reduce`; reload; confirm entry collapses to fade, parallax stops, glow freezes, tilt disabled. |
| Font loading | DevTools → Network → Slow 3G; reload; confirm no FOIT/FOUT; fallback → Satoshi swap imperceptible (preload Satoshi Variable; `font-display: optional` or `swap`). |
| CV download | Click Download CV; file downloads as `CV_Hashem_EMRAN.pdf`. |
| Keyboard nav | Tab through both CTAs; focus-visible rings clearly visible against dark background. |
| Contrast with glow | Sample tagline and body text over the brightest region of the ambient glow with DevTools contrast tool; must meet WCAG AA. |
| Grain perception | View at 1× zoom from normal viewing distance; grain must read as subtle texture, not visible noise. If visible, halve opacity. |
| Tablet collision | Resize browser from 768–1024px in 10px increments; verify portrait never touches CTAs, never overlaps tagline text. |
| Regression | Navigate to About / Projects / Technologies / Contact; confirm they render, their existing light/dark toggle works, and Footer still appears. |

## Rollout

- All work on branch `redesign/hero-premium-dark`.
- No feature flag. The new `Home.js` fully replaces the old one; the rest of the site is unaffected because the new Tailwind tokens and CSS custom properties are additive.
- Netlify preview deploy before merging.
- Hashem reviews on phone and laptop (at least Chrome + Safari iOS) before merging to `main`.

## Open questions (not blocking this spec)

- Do we kill light mode site-wide when we refresh the other pages, or keep the toggle? → Deferred to the first page-refresh spec.
- Should the numbered section tag (`01 / Introduction`) stay if we never add `02`, `03`, etc.? → Revisit during the next page spec.
- At what point do we unify Header/Footer with the new token system? → Deferred to a dedicated Header/Footer spec.

## References

- Aesthetic anchors: Linear, Vercel, Arc Browser, Apple.
- Current hero to be replaced: [src/Pages/Home.js](src/Pages/Home.js).
- Content source (unchanged): [src/Details.js](src/Details.js).
