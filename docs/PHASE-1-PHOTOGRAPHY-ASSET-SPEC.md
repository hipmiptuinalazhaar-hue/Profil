# Phase 1 — Photography & Asset Specification

Photography is evidence of real leadership and real activity. It is not filler.

The previous rejected homepage failed this standard by omitting leadership photos and using visibly degraded imagery. This specification makes that failure impossible to classify as complete in later phases.

## Master rule

**Real people. Real activities. Real resolution.**

## Leadership coverage — mandatory

Public leadership experience requires all nine portraits below before Phase 6 can pass the Asset Gate:

1. Capryan Agusto — Ketua Umum
2. Robi Apri Yansah — Sekretaris
3. Dhea Mahyang Sari — Bendahara
4. Suci Maharani — Kepala Bidang I
5. Marisha Aresta — Kepala Bidang II
6. Muhammad Jumadi — Kepala Bidang III
7. Yosi Anita — Kepala Bidang IV
8. Khusnul Khoiri — Kepala Bidang V
9. Ricky Reynaldo — Kepala Bidang VI

Compartment members use **name + role only**, no portraits, unless the founder explicitly changes the policy.

## Leadership image rules

- preserve the original face exactly
- preserve hair/hijab and clothing exactly
- no beauty retouching that changes identity
- no generative replacement of missing body/face parts
- no synthetic suit/background generation presented as the original photograph
- background removal is allowed only when explicitly approved during Phase 2
- if background removal is approved, edge quality must preserve hair/hijab/clothing detail
- transparent cutouts must be exported cleanly without white halos or jagged edges

## Resolution rules

### Hero/documentary master source
Preferred:
- long edge >= 2400px when available
- practical minimum for major full-width placement: 1600px long edge

### Leadership portraits
Preferred:
- long edge >= 1600px
- practical minimum: 1200px long edge for large editorial portrait usage

### Gallery/detail images
Preferred:
- long edge >= 1600px
- smaller sources may be used only at display sizes that do not require upscaling

## Upscaling rule

Do not enlarge a raster source beyond approximately **1.15x** its useful native dimensions for visible production placement.

If a source is too small:
- use it at a smaller intentional size,
- source a higher-resolution original,
- or omit it.

Never hide bad resolution behind blur, darkness, or artificial grain and call it art direction.

## Compression/export rules

Keep originals untouched outside the production export directory.

Production formats:
- AVIF when quality/compatibility pipeline is proven
- WebP as reliable modern fallback

Target quality is visually lossless for faces and text-bearing event documentation. Exact encoder values are determined in Phase 2 after source inspection; compression must be evaluated visually, not chosen only by file size.

Never create a 3–10 KB thumbnail and then display it as a large portrait/hero.

## Crop rules

Every asset should have metadata for:
- original aspect ratio
- preferred focal point
- safe crop zone
- minimum display size
- allowed section(s)

Faces must not be accidentally cropped at eyes/chin due to `object-fit: cover` defaults.

## Documentary photography groups

### A. Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026 / UMKM Bazaar
Use for:
- hero candidate
- organization legitimacy
- network story
- event story
- gallery
- entrepreneurial activation / UMKM context

### B. Sharing / networking with senior entrepreneurs and BPC HIPMI Lubuklinggau
Use for:
- mentorship story
- entrepreneur network
- learning ecosystem
- gallery

### C. Strategic collaboration with Wali Kota Lubuklinggau / public institution
Use for:
- government collaboration story
- institutional credibility
- partnership context
- gallery

Caption intent must remain factual. Network relationships must not be mislabeled as formal partnership unless documentation supports it.

## Logo assets

Expected identity sources include:
- HIPMI PT UIN Al Azhaar logo
- UIN Al Azhaar logo
- HIPMI PT Sumatera Selatan logo
- HIPMI Indonesia logo

Rules:
- retain vector/original-quality source when available
- do not distort aspect ratio
- do not add effects that alter official marks
- background removal/transparency may be performed only from a valid source and must preserve mark edges
- affiliation logos are not automatically presented as formal partner logos

## Naming convention for mastered assets

Suggested structure for Phase 2:

```text
public/media/
  brand/
    hipmi-pt-uin-alazhaar.*
    uin-alazhaar.*
    hipmi-pt-sumsel.*
    hipmi-indonesia.*
  leadership/
    capryan-agusto.*
    robi-apri-yansah.*
    dhea-mahyang-sari.*
    suci-maharani.*
    marisha-aresta.*
    muhammad-jumadi.*
    yosi-anita.*
    khusnul-khoiri.*
    ricky-reynaldo.*
  documentation/
    pelantikan-2026-01.*
    pelantikan-2026-02.*
    umkm-bazaar-2026-01.*
    mentorship-bpc-01.*
    mentorship-bpc-02.*
    pemkot-lubuklinggau-01.*
```

Do not encode subjective crop states into the only source file. Preserve masters and create derivatives when needed.

## Asset manifest requirement for Phase 2

Each mastered asset should eventually record:
- asset ID
- filename
- subject/event
- date if known
- location if known
- source/original reference
- dimensions
- file format
- focal point
- alt text
- caption
- approved usage
- processing notes
- verification status

## Accessibility

Alt text must describe the image’s informational purpose, not merely repeat the filename or say “photo.”

Decorative images use empty alt only when they genuinely add no information.

Leadership portraits should include person + role context when the nearby visible text does not already make it redundant.

## Asset Gate

A later public section fails the Asset Gate if any of the following occurs:
- missing required leadership portrait
- visibly blurred or pixelated photo
- wrong person-to-role mapping
- upscaled low-resolution image
- face-altering AI edit
- misleading caption
- fake/undocumented partner context
- broken image URL
- placeholder image presented as real content

No implementation may be called complete while an Asset Gate failure remains.