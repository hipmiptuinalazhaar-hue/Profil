# Design System Foundation — V2

## Core concept
**Entrepreneurial Institution, Presented Like a National Editorial Brand.**

The site must not feel like a student-organization template, generic startup landing page, government portal, or AI-generated portfolio. It should combine institutional authority, entrepreneurship, editorial confidence, documentary truth, and restrained technology.

## Personality ratio
- 60% premium institutional
- 20% entrepreneurial
- 10% editorial
- 10% experimental technology

## Benchmark DNA
Benchmarks are functional references, never cloning targets:
- Endeavor: entrepreneur ecosystem and multiplier-effect storytelling.
- YPO: prestige, leadership, membership quality.
- JCI: organization/member architecture, programs, events, impact.
- World Economic Forum: institutional authority, partnership and insight hierarchy.
- TED: documentary/editorial storytelling.

## Color architecture

### Primary darks
- Ink 950 `#06101D` — deepest institutional canvas.
- Ink 900 `#07111F` — primary midnight navy.
- Ink 800 `#0D1A2A` — elevated dark surface.
- Ink 700 `#14253A` — subtle dark separation.

### Light canvases
- Paper 50 `#F7F7F2` — primary editorial canvas.
- Paper 100 `#EEEFE8` — secondary warm neutral.
- White `#FFFFFF` — controlled high-contrast utility.

### Accents
- Gold 500 `#C7A15A` — primary brass accent.
- Gold 600 `#AA8241` — active/hover brass.
- Green 600 `#0F6A51` — secondary institutional signal when semantically justified.

Gold is an accent, never wallpaper. Large uninterrupted gold backgrounds are prohibited except for a deliberately exceptional data/impact moment with sufficient contrast.

## Typography

### Display
**Instrument Serif**, 400.

Purpose:
- hero statements
- section anchors
- editorial quotations
- leadership names
- major numerical storytelling

Rules:
- do not use for dense body text
- use optical contrast and whitespace instead of excessive decoration
- avoid more than 3 display sizes in one viewport

### Body / UI
**Manrope**, 400–700.

Purpose:
- navigation
- body copy
- labels
- metadata
- forms
- data
- captions

### Type scale intent
Desktop:
- Hero: clamp roughly 72–136px depending on composition
- H2: 48–88px
- H3: 28–48px
- Body large: 18–22px
- Body: 15–18px
- Meta/UI: 11–14px

Mobile:
- Hero: 48–68px
- H2: 36–52px
- H3: 24–34px
- Body large: 17–19px
- Body: 15–17px

The implementation phase may tune exact values, but hierarchy must remain editorial rather than merely scaling every heading linearly.

## Grid

### Desktop >= 1200px
- 12 columns
- max content width: 1440px
- side gutters: 48–72px depending on viewport
- inter-column gap: 20–28px

### Tablet 768–1199px
- 6 columns
- side gutters: 32–40px
- gap: 18–24px

### Mobile 360–767px
- 4 columns
- side gutters: 20–24px
- gap: 12–16px

Editorial asymmetry is allowed only when content order remains obvious and accessible.

## Spacing system
Use a restrained scale instead of arbitrary margins:
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 / 160`

Section rhythm should feel generous. Dense information belongs inside structured editorial layouts, not compressed cards.

## Geometry

Preferred:
- square/architectural image frames
- subtle 0–12px radii
- thin rules
- strong alignment
- intentional cropping
- off-grid editorial moments used sparingly

Avoid:
- every element being rounded
- pill buttons everywhere
- floating glass cards
- decorative blobs
- arbitrary 3D objects
- fake device mockups
- unrelated icon constellations

## Buttons and links
Primary CTA may use brass/gold against dark navy, or dark ink against paper.
Secondary actions should often be text links with directional motion rather than another button.

Buttons must be limited in number and clearly prioritize the main action.

## Card policy
Cards are not a default primitive.

Use cards only when the content is genuinely a repeatable record requiring boundaries, such as business directory items or event entries. Programs, impact, leadership, mission, and documentary stories should prefer editorial rows, split layouts, indexes, timelines, or immersive media composition.

## Photography
Photography is a core brand asset, not decoration.

- real people
- real events
- real context
- full-resolution sources
- no AI-generated documentary photography
- no face/body alteration
- no heavy blur overlays to disguise weak assets
- no upscaling beyond a conservative threshold
- leadership portraits use consistent framing, not identical synthetic faces

Detailed rules live in `PHASE-1-PHOTOGRAPHY-ASSET-SPEC.md`.

## Motion principles
Motion must clarify hierarchy, reveal media, show state, or connect sections.

Preferred:
- clip/image reveals
- restrained parallax
- staggered text entry
- subtle number transitions
- menu transition
- hover shifts
- section-to-section continuity

Avoid:
- endless floating
- bounce loops
- auto-rotating carousels
- gratuitous glow
- cursor gimmicks
- scroll hijacking
- movement that continues while the user is trying to read

Detailed timing and accessibility rules live in `PHASE-1-MOTION-INTERACTION.md`.

## Responsive rule
Design from 360px upward. Mobile is not a reduced desktop screenshot. It gets its own hierarchy, spacing, image crops, and interaction decisions while preserving the same content meaning.

## Anti-AI-slop checklist
Reject any design that relies on:
- purple/blue gradient cliché
- generic centered hero with three floating cards
- random rounded rectangles around every paragraph
- invented metrics
- fake logos/partners
- meaningless jargon
- generic icon rows
- indistinguishable SaaS typography
- visual complexity without organizational meaning
- decorative animation that competes with content

If a layout could be relabeled for any startup, university club, or agency without changing its structure, it is not specific enough for HIPMI PT.