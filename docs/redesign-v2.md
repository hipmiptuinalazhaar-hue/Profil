# HIPMI PT Digital Headquarters — Redesign V2

## North Star

HIPMI PT Digital Entrepreneurship Universe combines institutional credibility, Gen-Z energy, spatial depth, documentary photography, and performance-aware motion.

Design ratio:
- 60% sophisticated institutional
- 25% futuristic Gen-Z
- 15% experimental spatial/3D

The website must feel premium without becoming a visual-effects demo. Motion and depth must explain hierarchy, network, growth, or movement.

## 1. Design System V2

### Core palette
- Midnight 975: `#02070C`
- Midnight 950: `#040B13`
- Navy 900: `#07111F`
- Navy 800: `#0D1A2A`
- Ivory 50: `#F7F4EC`
- Ivory 100: `#ECE7DC`
- Champagne Gold 300: `#EAD39B`
- Champagne Gold 400: `#D7BB7A`
- Gold 500: `#C7A15A`
- Gold 600: `#AA8241`
- Emerald Signal: `#0F6A51`
- Slate: `#647184`

### Typography
- Display: Instrument Serif Regular
- UI/body: Manrope
- Headlines use high contrast, tight tracking, editorial line-height.
- Navigation and technical labels use compact uppercase Manrope with deliberate letter spacing.

### Material language
- Dark institutional surfaces with subtle radial light.
- Champagne-gold metallic cues reserved for identity and interaction emphasis.
- Ivory editorial surfaces for narrative contrast.
- Glass only for floating spatial labels or nodes, never as a default card treatment.

## 2. Flagship Homepage Concept

Homepage sequence:
1. Immersive Hero
2. Entrepreneur Journey
3. Program Universe
4. Leadership Constellation
5. Verified Impact Signals
6. Documentary Media Wall
7. Join / Partnership Finale

The page is designed as one continuous story, not a stack of unrelated sections.

## 3. Desktop and Mobile Adaptation

Desktop uses perspective, floating nodes, orbital compositions, asymmetric media, and expanded spatial storytelling.

Mobile intentionally collapses orbital layouts into direct grid/snap structures. No critical information depends on hover. Large spatial objects are simplified. Touch targets and text hierarchy remain primary.

## 4. Motion + Spatial 3D Specification

### Hero
- Pointer-reactive core identity object.
- Perspective documentary panel.
- Slow orbital rings.
- Floating ecosystem labels.
- Motion disabled/reduced under `prefers-reduced-motion`.

### Scroll
- Section content uses intersection-based reveal.
- No scroll-jacking.
- No critical interaction requires animation.

### Performance
- Current V2 uses CSS perspective/transforms rather than mandatory WebGL.
- This keeps first-load cost low and provides broad mobile compatibility.
- A future WebGL/R3F layer may replace the hero identity object without changing content architecture.

## 5. Component System

Reusable interaction language:
- `v2-kicker`
- `v2-section-head`
- `v2-button` with gold and ghost variants
- `v2-text-link`
- `v2-scene` spatial container
- `v2-program-node`
- `v2-person-node` / `v2-field-node`
- `v2-media-card`
- `v2-impact__signals`

Components share typography, border opacity, material cues, interaction timing, and responsive rules.

## 6. Production Implementation

Implemented in:
- `src/components/home/v2-immersive-home.tsx`
- `src/app/v2.css`
- `src/app/page.tsx`
- `src/app/layout.tsx`

Preserved:
- existing routing
- bilingual shell
- SEO metadata/schema
- official photography
- WhatsApp conversion
- program/leadership/impact/media routes
- Cloudflare deployment model

No GitHub Actions are introduced.

## Quality Gates

- No fabricated metrics.
- No AI-generated documentary photography.
- No mandatory WebGL dependency for content access.
- No scroll hijacking.
- No hover-only critical information.
- Reduced-motion support required.
- Mobile experience must be intentionally recomposed, not desktop squeezed into a narrow viewport.
