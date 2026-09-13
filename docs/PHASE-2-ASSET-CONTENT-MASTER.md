# Phase 2 — Asset & Content Mastering

Status: **complete**

## Source integrity

All source assets were audited against the files supplied by the organization. No portrait was synthesized and no person was re-created. Background removal was deliberately not performed because that operation requires explicit approval and is not necessary for Phase 3.

The source library remains the master archive. The typed registry preserves the complete mapping for later editorial phases, while only media required by the currently public phase is packaged into the production build.

## Brand inventory

Verified and mapped:
1. HIPMI PT UIN Al Azhaar official crest
2. Universitas Islam Nusantara Al-Azhaar Lubuklinggau logo
3. HIPMI Perguruan Tinggi Sumatera Selatan logo
4. HIPMI Indonesia logo

The HIPMI PT crest is the production shell mark. The other three remain mastered source assets for later network/affiliation presentation.

## Leadership inventory — 9/9 complete

The following mapping is locked:
- Capryan Agusto — Ketua Umum
- Robi Apri Yansah — Sekretaris
- Dhea Mahyang Sari — Bendahara
- Suci Maharani — Kepala Bidang I, latest replacement portrait only
- Marisha Aresta — Kepala Bidang II
- Muhammad Jumadi — Kepala Bidang III
- Yosi Anita — Kepala Bidang IV
- Khusnul Khoiri — Kepala Bidang V
- Ricky Reynaldo — Kepala Bidang VI

Compartment members remain name + role only. No compartment portrait is part of the public leadership system.

## Documentary inventory

### Pelantikan Akbar HIPMI PT Kampus se-Linggau Raya 2026
Nine high-resolution masters are catalogued, covering the UIN Al Azhaar delegation, cross-campus group, handover, ceremony, speaker, officials, and UMKM bazaar. `IMG_6057.JPG` is selected as the Phase 3 hero because it is sharp, clearly identifies the event, and centers the UIN Al Azhaar delegation without synthetic treatment.

### BPC HIPMI Lubuklinggau / mentorship & network
Three masters are catalogued: RBPH group, proposal/networking session, and meeting-room session. They are reserved for Documentary Stories in later phases.

### Strategic government collaboration
Three masters are catalogued from the agenda with Pemerintah Kota Lubuklinggau. Their public narrative is strategic collaboration in supporting local young entrepreneurs, not a fabricated formal partnership claim.

## Production media for Phase 3

The current shell needs only two public binary assets:
- `/assets/brand/hipmi-pt-uin-alazhaar.avif`
- `/assets/documentation/pelantikan-2026/hero-pelantikan-2026.avif`

Both are derived from verified source images without upscaling or synthetic reconstruction. They are stored in the repository as deterministic base64 source chunks under `assets-src/phase-3/` and materialized before every local/Cloudflare build by `scripts/materialize-assets.mjs`. The script validates the AVIF container signature and minimum file size before writing the production files, so corrupt or incomplete assets fail the build instead of silently publishing broken images.

Other mastered photographs remain in the source archive until the phase that actually publishes them. They are not falsely marked as production assets.

## Content rules locked

- Indonesian is canonical.
- English is a deliberate translation.
- Activity captions state only documented context.
- Network/affiliation is not called a formal partnership without written evidence.
- No fake statistics, dates, companies, members, businesses, events, or impact metrics.
- Alt text describes context, not visual decoration.

The typed asset registry is `src/content/media.ts` and is the implementation source of truth until a CMS replaces it.
