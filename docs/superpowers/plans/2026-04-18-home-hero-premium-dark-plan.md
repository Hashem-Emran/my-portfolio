# Implementation Plan — Home Hero Premium Dark-Minimal Redesign

**Spec:** [2026-04-18-home-hero-premium-dark-design.md](../specs/2026-04-18-home-hero-premium-dark-design.md)
**Branch:** `redesign/hero-premium-dark`

The plan is ordered so each phase ends in a working build. You can stop and preview after any phase.

## Phase 0 — Preflight

- [ ] **0.1** Create branch `redesign/hero-premium-dark` from `main`.
- [ ] **0.2** Commit current uncommitted work-in-progress on a separate branch first (`git stash push` or a safety branch). There are ~1000 lines of uncommitted changes across 7 files — don't mix them into the redesign.
- [ ] **0.3** Run `npm run build` on clean `main` to capture baseline bundle size. Note `Lighthouse Performance` score on mobile against the current Home to establish a baseline for the ≥85 target.

**Verify:** branch exists, baseline numbers recorded in a scratch note. No code changed yet.

## Phase 1 — Cleanup (independent, low risk)

- [ ] **1.1** Delete `src/Pages/Test.js` (confirmed unreferenced by any import).
- [ ] **1.2** Delete `src/Pages/Testing.js` (confirmed unreferenced by any import).
- [ ] **1.3** Delete `HASHEM_CV (6).pdf` at repo root (confirmed unreferenced; `public/Hashem-CV.pdf` is the canonical file).
- [ ] **1.4** Commit: `chore: remove unused exploratory pages and duplicate CV`.

**Verify:** `npm start` still boots. Every route (/, /about, /projects, /technologies, /contact) still renders.

## Phase 2 — Shared foundations

- [ ] **2.1** Install dependencies:
  ```
  npm install @fontsource-variable/satoshi @fontsource/jetbrains-mono @studio-freight/lenis
  ```
  (GSAP is already installed; ScrollTrigger ships with it — no separate install.)
- [ ] **2.2** Create `src/styles/tokens.css` with:
  - Surface tokens (`--bg-base`, `--bg-elevated`, `--bg-overlay`).
  - Text tokens (`--text-primary`, `--text-secondary`, `--text-meta`).
  - Accent tokens (`--accent-from`, `--accent-to`, `--accent-glow`).
  - Border tokens (`--border`, `--border-hover`).
  - Applied to `:root`.
- [ ] **2.3** Extend `tailwind.config.js`:
  - `theme.extend.colors` with semantic names mapping to the CSS variables (`bg-base`, `text-primary`, etc., using `rgb(var(--...) / <alpha-value>)` pattern or direct `var()` references).
  - `theme.extend.fontFamily` with `sans: ['Satoshi Variable', 'system-ui', 'sans-serif']` and `mono: ['JetBrains Mono', 'ui-monospace', 'monospace']`.
  - `theme.extend.backgroundImage` with `accent-gradient: 'linear-gradient(135deg, var(--accent-from), var(--accent-to))'`.
- [ ] **2.4** Create `src/lib/motion.js`:
  - Export shared eases (`EASE_PRIMARY = 'power3.out'`, etc.).
  - Export shared durations (`DUR_FAST = 0.4`, `DUR_BASE = 0.8`, `DUR_SLOW = 1.2`).
  - Export a `prefersReducedMotion()` helper that reads the media query.
  - **No feature-specific timelines here.** Architectural rule.
- [ ] **2.5** Create `src/lib/lenis.js`:
  - Export `LenisProvider` component that initializes Lenis on mount, ties it into a RAF loop, and tears down on unmount.
  - If `prefersReducedMotion()` returns true, render children without initializing Lenis (fallback to native scroll).
- [ ] **2.6** Create `src/Components/GrainOverlay.js`:
  - Fixed-position div covering the viewport.
  - Inline SVG noise (`<feTurbulence baseFrequency="0.9">` → filter), 4% opacity, `mix-blend-mode: overlay`, `pointer-events: none`.
  - `z-index` above content but below modals.
- [ ] **2.7** Update `src/index.css`:
  - Import `@fontsource-variable/satoshi`.
  - Import `@fontsource/jetbrains-mono`.
  - Import `./styles/tokens.css`.
  - Apply `background: var(--bg-base)` and `color: var(--text-primary)` to `body` inside a dark-scope selector (don't break existing `dark:` classes on other pages).
- [ ] **2.8** Update `src/index.js`:
  - Wrap `<App />` with `<LenisProvider>`.
  - Render `<GrainOverlay />` as a sibling inside `LenisProvider`.
- [ ] **2.9** Commit: `feat: add shared design foundations (tokens, fonts, Lenis, grain)`.

**Verify:**
- `npm start` boots. All pages render.
- DevTools → Network → filter fonts: Satoshi + JetBrains Mono both load.
- Body background on Home is `#0A0A0B` (tokens applied).
- Grain overlay is visible as texture when you zoom in DevTools → Rendering → Paint flashing.
- Scroll on any page feels smoothed (Lenis active).
- Toggle `prefers-reduced-motion` in DevTools → reload → scroll is native again.

## Phase 3 — Hero components

Build bottom-up so each component can be smoke-tested independently before composing.

- [ ] **3.1** `src/Components/Hero/AmbientGlow.js`:
  - Absolutely positioned radial gradient, size `~70vmin`, color `--accent-glow`, blur 80–120px.
  - `useEffect`: GSAP infinite tween animating `x`/`y` in a 30px radius over 20s, `ease: 'sine.inOut'`, `yoyo: true`.
  - Early-return a static version if `prefersReducedMotion()`.
- [ ] **3.2** `src/Components/Hero/DisplayName.js`:
  - Renders two `<span>`s: "HASHEM" (solid `text-primary`) and "EMRAN" (`bg-accent-gradient bg-clip-text text-transparent`).
  - Each wrapped in a mask `<span>` for the line-reveal animation (the mask span is `overflow: hidden`; the inner span gets translated).
  - Typography uses fluid `clamp()` via a Tailwind arbitrary value or a utility class added to `index.css`.
  - Accepts a `ref` (or uses `forwardRef`) so `useHeroTimeline` can target it.
- [ ] **3.3** `src/Components/Hero/HeroPortrait.js`:
  - `<img>` inside a rounded-rect `<div>` (`rounded-2xl`, `overflow: hidden`).
  - Absolute glow halo as a pseudo-element or sibling div behind the frame.
  - `onMouseMove` handler computes `rotateX`/`rotateY` (max ±6°) — apply via GSAP quickSetter for performance; only on devices with `pointer: fine`; disabled under reduced motion.
  - `onMouseLeave` resets tilt with a 300ms ease.
  - `forwardRef` for entry animation.
- [ ] **3.4** `src/Components/Hero/HeroActions.js`:
  - Two buttons in a flex row with a gap.
  - Primary "Download CV" — on click, build a download link pointing to `/Hashem-CV.pdf` and trigger it (fixes the broken `Home.js:73` path).
  - Secondary "View Work ↓" — `<Link to="/projects">` from `react-router-dom`.
  - Primary hover: inner glow intensifies (box-shadow transition).
  - Secondary hover: border opacity increases.
  - Both: `focus-visible` state with accent-gradient outline + soft glow.
  - `forwardRef` for entry animation.
- [ ] **3.5** `src/Components/Hero/HeroMeta.js`:
  - Three small mono-font labels: "01 / Introduction" (top-left of content area), "scroll ↓" (bottom-left), "Based in Morocco" (bottom-right).
  - Uses `--text-meta` color, JetBrains Mono, uppercase, wide tracking.
  - `forwardRef` for entry animation.
- [ ] **3.6** `src/Components/Hero/useHeroTimeline.js`:
  - Custom hook receiving refs for: ambientGlow, metaIntro, nameHashem, nameEmran, tagline, actions, portrait, metaBottom.
  - Builds one GSAP timeline implementing the entry sequence from the spec (Motion section, step 1).
  - Builds ScrollTrigger instances for photo parallax (0.7×) and name parallax (1.1×, opposite).
  - On mount, checks `prefersReducedMotion()` — if true, replace timeline with a single 400ms fade-in of the whole hero root and skip ScrollTrigger.
  - Returns cleanup that kills the timeline and ScrollTriggers.
- [ ] **3.7** `src/Components/Hero/Hero.js`:
  - Layout grid (12-column CSS grid or flex with explicit column spans).
  - Composes `AmbientGlow`, `HeroMeta`, `DisplayName`, `HeroPortrait`, tagline (inline — not a separate component), `HeroActions`.
  - Manages refs and calls `useHeroTimeline`.
  - Tagline inline: single `<p>` with Satoshi medium, `Data Science | Full-Stack Developer`, pipe wrapped in a span styled with the accent gradient.
- [ ] **3.8** Rewrite `src/Pages/Home.js`:
  - Strip out the old GSAP imports and timeline (now owned by `useHeroTimeline`).
  - Remove the old JSX markup entirely.
  - New body: `<main className="min-h-screen"><Hero /></main>`.
  - Pull `personalDetails` from `Details.js` and pass through `Hero` → `DisplayName` / `HeroPortrait` as needed.
- [ ] **3.9** Commit: `feat(home): layered-asymmetric hero with cinematic entry`.

**Verify after each step:**
- `npm start` still boots.
- Compile has no errors.
- At step 3.9, open Home — entry sequence plays, name gradient visible on "EMRAN" only, photo intersects "EMRAN," CTAs work (CV downloads, View Work navigates to /projects).

## Phase 4 — CV asset tracking

- [ ] **4.1** `git add public/Hashem-CV.pdf` (currently untracked).
- [ ] **4.2** Commit: `chore: track CV PDF asset`.

**Verify:** Click Download CV on deployed preview → file downloads.

## Phase 5 — Motion polish & accessibility

- [ ] **5.1** Tune entry timing by eye — adjust the `t=` offsets in `useHeroTimeline.js` until the sequence feels smooth, not rushed (spec says ~1.8s total; final tuning is a feel judgment).
- [ ] **5.2** Tune parallax coefficients (0.7× photo / 1.1× name) — if the z-axis effect is too subtle or too aggressive, adjust in 0.1 steps.
- [ ] **5.3** Tune grain opacity — if visible as noise at 1× zoom from normal viewing distance, drop opacity from 4% → 3% → 2%.
- [ ] **5.4** Tune glow position — confirm it doesn't reduce text contrast anywhere. Use DevTools contrast checker on tagline and meta text sampled over the brightest glow region.
- [ ] **5.5** Emulate `prefers-reduced-motion: reduce` in DevTools — reload, confirm: entry collapses to single fade, no parallax, glow static, tilt disabled, native scroll.
- [ ] **5.6** Keyboard audit — tab through both CTAs, confirm focus rings are clearly visible.
- [ ] **5.7** Commit polish tweaks as small separate commits (easier to bisect later if something regresses).

## Phase 6 — Responsive & cross-browser QA

- [ ] **6.1** Resize from 360px → 1920px in DevTools. At each breakpoint in the spec (360, 768, 1280, 1920):
  - Display name doesn't overflow.
  - Portrait doesn't collide with CTAs.
  - Portrait doesn't obscure tagline on tablet widths (768–1024).
  - Meta labels stay pinned to corners without overlapping content.
- [ ] **6.2** Test on: Chrome (desktop), Firefox (desktop), Safari (desktop), Safari (iOS — via a real device or responsive simulator). If Safari iOS shows issues with `clamp()` or `backdrop-filter`, fix them here.
- [ ] **6.3** Run `npm run build` → deploy to Netlify preview. Record Lighthouse Performance on mobile. If <85, investigate: font loading, image optimization, unused JS. If visual quality would be compromised to hit 85, per the spec, document the tradeoff in the PR description and accept the lower score.
- [ ] **6.4** Regression sweep: navigate to /about, /projects, /technologies, /contact, confirm each renders, light/dark toggle still works on those pages, Footer still appears.

## Phase 7 — Preview deploy, review, merge

- [ ] **7.1** Push `redesign/hero-premium-dark` to origin.
- [ ] **7.2** Open PR against `main`. Description: summary + link to spec + Lighthouse numbers + GIF or screenshot.
- [ ] **7.3** Netlify preview URL in PR — review on your phone and laptop (Chrome + Safari iOS minimum).
- [ ] **7.4** Fix any issues, push, re-review.
- [ ] **7.5** Merge to `main` when you're satisfied.

## Critical files

**Created:**
- `src/styles/tokens.css`
- `src/lib/motion.js`
- `src/lib/lenis.js`
- `src/Components/GrainOverlay.js`
- `src/Components/Hero/AmbientGlow.js`
- `src/Components/Hero/DisplayName.js`
- `src/Components/Hero/HeroPortrait.js`
- `src/Components/Hero/HeroActions.js`
- `src/Components/Hero/HeroMeta.js`
- `src/Components/Hero/useHeroTimeline.js`
- `src/Components/Hero/Hero.js`

**Modified:**
- `tailwind.config.js`
- `src/index.css`
- `src/index.js`
- `src/Pages/Home.js`
- `package.json` (deps)

**Deleted:**
- `src/Pages/Test.js`
- `src/Pages/Testing.js`
- `HASHEM_CV (6).pdf`

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Lenis conflicts with `react-router-dom` scroll restoration | Lenis has a `smoothTouch: false` and `scrollRestoration` config. Test navigation between pages. If broken, wire Lenis's `scrollTo(0)` into a route-change effect. |
| Tailwind v3 `bg-clip-text` on variable font + gradient has Safari iOS rendering bugs | Fallback: if gradient clip fails, set `EMRAN` to solid `--accent-from`. Detect via `@supports (-webkit-background-clip: text)`. |
| Satoshi Variable font file is large (~100 KB) | Preload the weight range used by the display name only; subset if possible. Measured in Phase 6.3. |
| GSAP ScrollTrigger + Lenis need synchronization (both hook into scroll) | Lenis docs have a documented ScrollTrigger integration recipe — follow it verbatim in `lenis.js`. |
| Deleted files cause unexpected runtime errors (dynamic imports we missed) | Phase 1 verifies every route still renders before moving on. |

## Open items for future work (not in this PR)

- Page-by-page refresh to adopt new tokens (About, Projects, Technologies, Contact, Header, Footer).
- Decision on killing light mode site-wide.
- Header/Footer refresh to match new palette.
- `02 / …`, `03 / …` section tags once Home gains more content sections.
