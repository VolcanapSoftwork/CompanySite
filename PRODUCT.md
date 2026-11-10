# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Thai SME owners and operations managers who need a business system (CRM, HR/payroll, booking, back office, dashboard, clinic/hospital system) built or replaced. They arrive comparing software houses before asking for a quote, usually without an in-house tech team, and need to judge whether this vendor can deliver and roughly what it will cost. Government and larger organizations are a secondary audience.

## Product Purpose

The company site for VOLCANAP SOFTWORK (โวลคานาป ซอฟต์เวิร์ค), a Thai software house that analyzes, designs, builds and maintains custom web systems. The site succeeds when a qualified SME visitor checks the published starting prices and sends a quote request.

## Positioning

- Has shipped a live national government system: the TATIP RTP human-trafficking reporting system with the Anti-Trafficking in Persons Center, Royal Thai Police.
- Transparent upfront pricing: the site publishes a starting price for every system type and the yearly MA rate, before any sales call.

## Operating Context

- Primary contact path is a price list plus a short quote-request form (name, company, phone, systems of interest, details). Picking price-list rows adds them to the request; sending opens a pre-filled email to the company (mail app, Gmail or Outlook) or copies the text. No form backend.
- Contact: contact@volcanap.com. The site does not show a city or address (owner's request).
- Site language is Thai with English technical terms; Thai text needs phrase-safe line breaking (`Phrases` helper).

## Capabilities and Constraints

- Services: custom software, web application & portal, dashboard & reporting, system integration, AI & business automation, maintenance & enhancement.
- Delivery process: consulting, solution design, sprint development, QA & UAT, launch & support.
- Starting prices (Standard size: one team, about 3–4 months) and the MA rate live in `app/pricing.ts` and are the company's published prices.

## Brand Commitments

- Keep the volcano logo (`public/volcanap-logo.png`) and its orange as the brand anchor.
- Keep the site light and bright; avoid dark backgrounds and dark sections.
- Keep the government reference low-key: do not go deep into TATIP project detail on the homepage or set the agency side by side with the company.
- Keep the quote request as the main contact path. Starting prices are hidden for now at the owner's request (`SHOW_PRICING = false` in `app/pricing.ts`); while hidden, the site makes no price claims. The interactive scope estimator was replaced by a price list and request form in November 2026 at the owner's request.
- Prefers a conventional, category-standard software-house site over a concept-led world (chosen in the November 2026 redesign round). The craft bar is set by Thai tech companies' sites: Odds, Skooldio, Sellsuki.

## Evidence on Hand

- Live work: TATIP RTP reporting system (screenshots in `public/works/tatip/`, agency mark `public/tatip-rtp.png`), Diabetes AR (WebAR health education, `public/works/diabetes-ar/`), Thai CV Risk AR (`public/works/thai-cv-risk-ar/`).
- Concept mockups, clearly labelled as mockups: hospital (HIS), HR & payroll with employee app, CRM, both as live routes under `/mockups` and screenshots in `public/works/mockups/`.
- Absent, must not be invented: client logos beyond TATIP RTP, testimonials, team size or headcount, years in business, project counts, awards, delivery-time or uptime statistics.

## Product Principles

- Show the real work and the real price; claims are only what the evidence supports.
- Make scoping a project the easiest thing on the page for a non-technical owner.
- Credibility comes from shipped systems, shown with restraint.
