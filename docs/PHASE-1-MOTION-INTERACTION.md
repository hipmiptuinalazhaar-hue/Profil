# Phase 1 — Motion & Interaction System

Motion exists to support hierarchy and spatial understanding. It must never become a showreel that interrupts reading.

## Principles

1. Motion must explain state, hierarchy, or continuity.
2. No endless decorative animation.
3. No scroll hijacking.
4. No interaction may depend on motion to communicate essential information.
5. Reduced-motion users receive a complete static experience.
6. Mobile motion must be lighter than desktop motion.
7. Motion should not materially damage Core Web Vitals or interaction latency.

## Timing language

### Micro interactions
- hover/focus state: 120–220ms
- button/link directional shift: 140–200ms
- menu icon transition: 180–260ms

### Section reveals
- text reveal: 350–600ms
- image mask reveal: 450–750ms
- section stagger between children: 40–90ms

### Large transitions
- hero entrance: 700–1100ms maximum total sequence
- full-screen mobile menu: 280–420ms
- route/page transition, if later approved: 350–650ms

Avoid stacking multiple 1-second animations. The user should be able to read almost immediately.

## Easing

Preferred families:
- `cubic-bezier(.2,.7,.2,1)` for editorial reveal
- `cubic-bezier(.16,1,.3,1)` for deceleration
- standard ease-out for micro states

Avoid elastic/bouncy easing in institutional UI.

## Hero motion

Allowed:
- headline lines reveal once on initial load
- dominant image clip/mask reveal
- subtle metadata fade/slide
- documentary image may shift slightly with scroll

Limits:
- parallax displacement <= approximately 4% of viewport dimension
- no looping float
- no image zoom that visibly degrades sharpness
- no autoplay carousel
- no repeated entrance when user scrolls a few pixels up/down

## Navigation motion

Desktop:
- background/contrast transition after scroll threshold
- underline/rule/link shift on hover/focus
- no nav item bouncing/scaling excessively

Mobile:
- menu panel enters once from a clear direction or expands from header plane
- focus remains trapped only if implemented as a true modal pattern
- Escape closes menu
- body-scroll handling must not cause layout jump

## Program index interaction

Desktop:
- focused/hovered row may reveal secondary media/context
- name may shift 4–10px or rule may extend
- neighboring rows remain stable, avoiding large layout jump

Mobile:
- no hover dependency
- descriptions remain visible
- optional tap expansion only for nonessential detail

## Ecosystem interaction

Desktop:
- focusing a node may emphasize its incoming/outgoing relationship
- use line opacity/weight changes, not orbiting animations
- selected node description may reveal in a fixed context panel

Mobile:
- linear journey first
- tap details second

## Leadership interaction

Allowed:
- subtle image crop shift on hover
- name/role rule reveal
- portrait metadata entrance

Not allowed:
- face distortion
- 3D card tilt
- hover blur
- disappearing names
- gimmick cursors

## Documentary story interaction

Allowed:
- image mask reveal on section entry
- caption slide/fade
- very subtle image parallax

Not allowed:
- auto-advance slideshow
- fast Ken Burns effect
- text appearing only on hover

## Gallery interaction

- hover may expose caption metadata on desktop
- caption must still be accessible on touch/mobile
- image scale <= 1.03 unless crop safety is verified
- avoid simultaneous animation on all visible images

## Reduced motion

Honor `prefers-reduced-motion: reduce`.

When active:
- disable scroll-linked transforms
- remove clip/stagger sequences where possible
- show content in final state
- retain state changes through color, border, underline, or instant visibility
- preserve focus indicators

## Performance budget

- prefer CSS transitions for simple states
- use Motion/Framer Motion only when state/sequence complexity justifies it
- use GSAP only if a required interaction cannot be implemented cleanly otherwise
- avoid shipping animation libraries globally for one decorative effect
- no animation should trigger expensive layout work on every scroll frame
- transform/opacity are preferred properties

## Motion QA

Before a production motion is approved:
- keyboard interaction remains understandable
- motion does not block input
- mobile midrange Android remains smooth
- reduced-motion behavior is verified
- no cumulative layout shift is introduced
- no element animates forever unless it is a meaningful live-status indicator

If an animation can be removed without reducing comprehension or brand quality, removal is preferred.