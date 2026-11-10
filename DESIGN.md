---
name: VOLCANAP SOFTWORK
description: Light, clear software-house system. White ground, cool neutrals, one brand orange.
colors:
  brand: "#ea7530"
  brand-deep: "#d9661f"
  brand-soft: "#fdf1e9"
  brand-line: "#f5c4a5"
  ink: "#15171c"
  ink-2: "#2b2f37"
  muted: "#5b616e"
  faint: "#8a909c"
  line: "#e5e7eb"
  line-strong: "#d3d7de"
  bg: "#ffffff"
  bg-tint: "#f6f7f9"
  ok: "#1f7a5a"
  ok-soft: "#e9f6f0"
  danger: "#b42318"
  danger-line: "#c0392b"
typography:
  display:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "1.14rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body-lead:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "1.06rem"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.4
  price:
    fontFamily: "Anuphan, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
    fontFeature: "\"tnum\" 1"
rounded:
  nav: "8px"
  control: "10px"
  surface: "12px"
  panel: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 40px)"
  section: "clamp(72px, 9vw, 120px)"
  card-pad: "22px 24px 24px"
  form-pad: "clamp(24px, 3vw, 36px)"
  form-gap: "22px"
  grid-gap: "24px"
  column-gap: "40px"
  shell-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.brand-deep}"
  button-primary-lg:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.nav}"
    padding: "8px 14px"
  nav-link-hover:
    backgroundColor: "{colors.bg-tint}"
    textColor: "{colors.ink}"
  work-card:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.surface}"
    padding: "22px 24px 24px"
  price-row:
    textColor: "{colors.ink}"
    typography: "{typography.price}"
    padding: "10px 0"
    height: "52px"
  price-row-selected:
    textColor: "{colors.brand}"
  price-toggle:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    size: "28px"
  price-toggle-selected:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.bg}"
  text-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    height: "48px"
  chip-selected:
    backgroundColor: "{colors.brand-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px 4px 4px 12px"
  tag:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "3px 12px"
    height: "28px"
  filter-pill-active:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  quote-form:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.panel}"
    padding: "clamp(24px, 3vw, 36px)"
  note-box:
    backgroundColor: "{colors.bg-tint}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.surface}"
    padding: "14px 16px"
  success-message:
    backgroundColor: "{colors.ok-soft}"
    textColor: "{colors.ok}"
    rounded: "{rounded.surface}"
    padding: "14px 16px"
  cta-panel:
    backgroundColor: "{colors.brand-soft}"
    rounded: "{rounded.panel}"
    padding: "clamp(28px, 4vw, 44px)"
---

# Design System: VOLCANAP SOFTWORK

## Overview

**Creative North Star: "The Open Workshop Window"**

A software house that lets the visitor look straight into the work: white ground, real product screens in browser and phone frames, prices in plain sight. The system plays the category standard straight and wins on craft: clean Thai/Latin type at confident sizes, cool-neutral hairlines, generous whitespace, and a single brand orange, the exact orange of the VCN mountain logo, that marks what to do next. Nothing is costumed; credibility comes from the screens and the numbers.

Density is relaxed on marketing sections (section padding up to 120px, 40px column gaps) and tightens only where the page becomes a tool: the price list's ruled rows and the quote form's fields. Depth is soft and neutral: hairline-bordered surfaces at rest, a slightly deeper shadow on hover, and the heaviest shadow reserved for product screenshots so they read as objects in front of the page.

The site stays light from header to footer. The brand record commits to keeping the logo and its orange as the anchor and to avoiding dark backgrounds and dark sections; the only dark surfaces are device bezels and the transient image lightbox.

**Key Characteristics:**
- White and cool-gray ground; alternating sections switch to a faint tint with hairline top and bottom borders.
- One accent orange (the VCN logo orange, exactly), used for filled actions, links, icons and selected states, never as large fills or gradients.
- One sans family (Anuphan) for every role; hierarchy comes from size and weight.
- 12px-radius surfaces with hairline borders and soft neutral shadow.
- Real screenshots framed as browser windows and phones, cropped to a legible region rather than shrunk.
- Prices shown as a plain ruled list in tabular figures, not as pricing cards.

## Colors

A white, cool-neutral palette carrying a single orange accent, the logo orange used unaltered for fills, text and marks with paler tints derived from it, plus one green reserved for "live" status and one red reserved for form errors.

### Primary
- **VCN Orange** (brand): The owner's VCN logo orange, used exactly everywhere: fills for primary buttons, active filter pills, selected price toggles and the first process step; orange text and icons (text links, "more" links, service icons, selected price names, required-field asterisks, chip remove buttons); decorative marks (challenge-list bullets); the focus outline and field focus border. In CSS, `--volcanap`, `--brand` and `--brand-text` all resolve to this one value.
- **Banked Orange** (brand-deep): Hover/pressed fill for primary buttons.
- **Orange Wash** (brand-soft): Selected-system chips, closing CTA panel, check-icon discs.
- **Orange Hairline** (brand-line): Borders on orange-washed surfaces (chips, CTA panel, unfilled step numbers).

**Contrast, by owner decision.** VCN Orange measures 2.96:1 both as white text on an orange fill and as orange text on white, and about 2.7:1 on the washes and the tint. That is below WCAG AA for normal-size text (4.5:1) and just under the 3:1 non-text minimum for the focus outline. The owner chose the exact logo orange everywhere after being shown these numbers. This is a deliberate brand decision, not an accessible pairing. Do not cite these pairings as AA-compliant.

### Secondary
- **Live Green** (ok) with **Live Green Wash** (ok-soft): Status only. The "live system" dot and label on work cards and the quote form's success message. Mockups use muted gray in the same slot.

### Tertiary
- **Error Red** (danger) with **Error Border** (danger-line): Form validation only: the message under an invalid field and that field's border. Defined as `--danger` and `--danger-line`.

### Neutral
- **Ink** (ink): Headings, body text, price figures, price-group heading rules, phone bezels.
- **Graphite** (ink-2): Nav links, secondary text that must stay strong, tags, list items, note boxes.
- **Slate** (muted): Supporting paragraphs, captions, meta lines, unselected price toggles.
- **Fog** (faint): Placeholders, character counts and quiet image captions only.
- **Hairline** (line): Default 1px borders and dividers everywhere, including price rows.
- **Hairline Strong** (line-strong): Secondary-button and text-field borders, screenshot frame border, price-toggle outline, process connector line, browser-bar dots.
- **Paper** (bg): Page ground and every card surface.
- **Cool Tint** (bg-tint): Alternating section ground, work-detail hero, browser chrome bar, nav hover, note boxes.

### Named Rules
**The One Orange Rule.** VCN Orange is the only accent, and it is never re-tuned: fills, text, icons and marks all use the exact logo value, with only the hover fill darkened. It appears as small fills (buttons, active pills, selected toggles), text, icons and soft washes; it never floods a section, never forms a gradient, and never becomes a background behind body copy except the pale Orange Wash.

**The Green Means Live Rule.** Green appears only to say "this is running / this succeeded". It is not a second brand color.

## Typography

**Display Font:** Anuphan (with Noto Sans Thai, system-ui)
**Body Font:** Anuphan (same family)

**Character:** A single modern Thai/Latin grotesque carries the whole site; bold weights at display sizes give the confidence, regular weight at 17px with generous 1.65 to 1.75 leading keeps Thai copy readable.

### Hierarchy
- **Display** (700, clamp 2.6rem to 3.75rem, 1.12, -0.015em): The homepage H1 only. Drops to clamp(2.1rem, 9.2vw, 2.6rem) under 680px.
- **Headline** (700, clamp 2rem to 2.75rem, 1.18): Section H2s, including the quote section. The work-detail H1 sits slightly smaller (clamp 1.9rem to 2.6rem, 1.2); the closing CTA H2 at clamp 1.5rem to 2rem.
- **Title** (600 to 700, 1.02rem to 1.14rem, 1.35): Service, step and card names, and price-group headings (700, 1.02rem).
- **Body lead** (400, 1.06rem to 1.18rem, 1.75, Slate): Section intros and the hero sub-copy, capped around 34em to 44em.
- **Body** (400, 17px, 1.65; 16px under 680px): Running text and text-field input (1rem).
- **Body small** (400, 0.92rem to 0.97rem, 1.6 to 1.7, Slate): Card and service descriptions, price names, notes.
- **Price** (700, tabular figures, Ink): "เริ่มต้น ฿X" values in the price list and the running total; the "starting" prefix drops to 0.78rem, 500, Slate.
- **Label** (600, 0.78rem to 0.95rem): Field labels, status lines, filter pills, meta. Never uppercase, never letter-spaced.

### Named Rules
**The One Family Rule.** Anuphan for every role. Hierarchy is built from size and weight (400/500/600/700), not from a second face.

**The Tabular Money Rule.** Every price and running total uses tabular figures so columns of baht align.

**The Phrase-Safe Rule.** Thai headings and copy are wrapped in the Phrases helper so lines break between phrases, never inside a word; headings also use balanced wrapping and body text pretty wrapping.

## Layout

A centered shell of max 1200px with fluid gutters (clamp 20px to 40px, safe-area aware). Sections stack with fluid vertical padding (clamp 72px to 120px) and alternate between Paper and Cool Tint grounds; tinted sections carry a hairline top and bottom border. Section heads cap at 720px with 36px to 56px space beneath; a split head puts a side note (such as the MA note box) at the right.

Recurring grids: the split hero (about 1.05fr / 1fr, collapsing to one column at 980px); a sticky side head beside a two-column service list (collapsing at 1100px); a three-column work grid (two at 980px, one at 680px) with 24px gaps; a five-step process row on a shared connector line (three columns at 1100px, a vertical numbered rail at 680px); the price list in three columns of groups (two at 1100px, one at 680px) with 40px gaps; the quote section as a sticky copy column beside the form card (0.85fr / 1.15fr, stacking at 980px), with paired fields that stack at 680px; and a 12-column gallery where desktop shots span 6 and phone shots span 3.

Lists of services, challenges, service cards and prices are open, not boxed: items separated by hairline rules with 40px column gaps. Boxes are reserved for things you act on as a whole or that hold media.

Breakpoints: 1100px, 980px (header collapses to a menu button, header height 68px to 64px), 680px (single column, 16px body). Touch targets are at least 44px (price rows 52px, text fields 48px); on coarse pointers footer links grow to 48px.

## Elevation & Depth

A hybrid of hairline borders and soft, cool-neutral shadows tinted from Ink. Surfaces at rest carry a hairline border plus the faintest shadow; hover lifts a card a few pixels into the medium shadow; product screenshots and the phone frame carry the largest shadow so they read as physical objects in front of the page. The sticky header uses a 92% white with a backdrop blur instead of a shadow.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 2px rgba(21,23,28,0.06), 0 2px 8px rgba(21,23,28,0.04)`): Work cards, quote form card, gallery frames.
- **Lifted** (`box-shadow: 0 12px 32px rgba(21,23,28,0.1), 0 2px 6px rgba(21,23,28,0.05)`): Card hover; the small logo badge overlapping a work-detail screenshot.
- **Showcase** (`box-shadow: 0 30px 60px rgba(21,23,28,0.14), 0 6px 16px rgba(21,23,28,0.06)`): Hero browser frame, phone frame, work-detail screenshot.
- **Orange Button** (`box-shadow: 0 1px 2px rgba(217,102,31,0.3), 0 4px 12px rgba(234,117,48,0.2)`): Primary buttons only.
- **Focus Halo** (`box-shadow: 0 0 0 3px rgba(234,117,48,0.18)`): Text fields on focus, with the border turning VCN Orange.

### Named Rules
**The Screens Float Highest Rule.** The Showcase shadow belongs to product imagery. UI surfaces never go above Lifted.

## Shapes

Gently rounded throughout: 12px on surfaces (cards, frames, note boxes, success message), 10px on buttons, text fields and small icon tiles, 8px on nav links, 20px on the large quote-form and CTA panels, and full pills for tags, selected-system chips and the gallery filter bar. Circles mark step numbers, price toggles, chip remove buttons, status dots and check-icon discs. Device frames follow the device: phone bezels at 26px (20px mobile) with an inner 20px screen radius. Borders are 1px hairlines; the one heavier line is the Ink rule under each price-group heading.

## Components

### Buttons
Solid and calm, with a small motion reward.
- **Shape:** 10px radius, 44px tall (52px large), 600 weight.
- **Primary:** VCN Orange fill, white text, Orange Button shadow. Trailing arrow icon nudges 3px right on hover. The quote form's submit is the large primary at full width.
- **Hover / Focus:** Fill deepens to Banked Orange; press shifts down 1px; focus is a 2px VCN Orange outline at 3px offset. Hover effects apply only on fine pointers.
- **Secondary:** White with a Hairline Strong border, Ink text; border darkens to Graphite on hover.
- **Text link / link button:** VCN Orange, 600. Inline links in forms are underlined at 3px offset; standalone text links underline on hover at 4px offset.

### Chips
- **Tags:** Pill, white with Hairline border, Graphite 0.86rem text; on tinted cards they invert to Cool Tint with no border.
- **Selected-system chips:** Pill in Orange Wash with an Orange Hairline border, Ink 0.9rem text, and a 28px round remove button in VCN Orange that takes a faint orange wash on hover.
- **Gallery filter:** A pill track (white, Hairline border, 4px inset) holding transparent pills in Slate; the active pill fills VCN Orange with white text.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Paper.
- **Shadow Strategy:** Rest, rising to Lifted with a 3px lift on hover; thumbnail image zooms 2.5%.
- **Border:** Hairline, strengthening to Hairline Strong on hover.
- **Internal Padding:** 22px to 24px; thumbnails sit flush on top with a hairline divider, zoomed into the top-left of the screen so it reads at card size.
- **Note box:** Cool Tint, Hairline border, 12px radius, Graphite 0.94rem text, 14px by 16px padding (the MA note).

### Inputs / Fields
- **Style:** White, Hairline Strong border, 10px radius, 48px minimum, 12px by 14px padding, 1rem text; 600-weight labels above with an VCN Orange asterisk for required fields; Fog placeholders.
- **Focus:** Border turns VCN Orange with a soft 3px orange halo; no outline.
- **Error:** Border turns Error Border; a 0.88rem Error Red message sits beneath.
- **Success:** Live Green Wash box, Live Green text, 12px radius, with a check icon.

### Navigation
- **Header:** Sticky, 68px, 92% white with blur and a hairline bottom border. VCN mountain mark (`public/volcanap-vcn-160.png`, served unoptimized, 40px, 9px radius; the 512px `volcanap-vcn.png` is the favicon and OG mark) with wordmark and small Slate subline; centered Graphite links (0.97rem, 500) with Cool Tint hover pills; VCN Orange CTA on the right.
- **Mobile:** Under 980px links and CTA collapse into a bordered 44px menu button; the panel drops in (0.22s ease-out) as 48px rows divided by hairlines, ending in a full-width primary button.
- **Footer:** White, hairline top, three columns (mark and name, centered link pills, right-aligned Slate tagline), stacking centered under 980px.

### Product Frames (signature)
Real screenshots are the hero of the system. Desktop screens sit in a browser frame (12px radius, Hairline Strong border, Cool Tint chrome bar with three gray dots) cropped to a legible region. Phone screens sit in an Ink bezel with a large inner radius. In the hero the phone overlaps the browser's lower-left corner; on work pages a small white logo badge overlaps the screenshot's corner. Frames are always captioned as examples when they show mockups.

### Process Rail (signature)
Numbered circles (40px, Orange Hairline border, VCN Orange tabular numerals) hung on a single 1px Hairline Strong line; the first step is filled VCN Orange. On mobile the line turns vertical and joins the numbers down the left.

### Price List (signature)
Published starting prices as an open ruled list, not cards. Each group opens with a 700 heading over a 1px Ink rule; each row is a full-width toggle button (52px minimum) with the name, the price in tabular figures, and a 28px round toggle (Hairline Strong outline, plus icon). On hover the name and toggle turn VCN Orange; when selected the name goes VCN Orange at 600 and the toggle fills VCN Orange with a white check. Selections flow into the quote form's chips and running total.

### Quote Form (signature)
A white 20px-radius card with the Rest shadow beside a sticky copy column holding the section head and contact list. Fields stack 22px apart (paired on wide screens); the selected systems appear as chips with a running total in tabular figures; a full-width large primary submits, with a centered Slate line of Gmail, Outlook and copy fallbacks as VCN Orange underlined links beneath.

## Do's and Don'ts

### Do:
- **Do** keep every section on Paper or Cool Tint; separate them with 1px Hairline borders, not color blocks.
- **Do** use the exact VCN Orange for every orange fill, text and mark; only the hover fill darkens, to Banked Orange.
- **Do** show real screens in browser or phone frames, cropped to a readable region, and label mockups as mockups.
- **Do** box only what is acted on as a whole or holds media; leave text and price lists open with hairline rules.
- **Do** set every price in tabular figures.
- **Do** keep touch targets at 44px minimum (48px for fields and coarse-pointer links) and gate hover effects behind fine pointers.
- **Do** wrap Thai headings and copy with the Phrases helper.

### Don't:
- **Don't** add dark sections or dark backgrounds; dark is limited to device bezels and the image lightbox.
- **Don't** use orange as a large fill, a section background, or a gradient.
- **Don't** claim AA contrast for orange text or white-on-orange; the 2.96:1 pairing is an owner decision, not a compliant one.
- **Don't** introduce a second typeface or uppercase, letter-spaced labels (the VOLCANAP SOFTWORK wordmark is the only uppercase text).
- **Don't** give UI cards the Showcase shadow; that depth belongs to screenshots.
- **Don't** use green for anything other than live or success status, or red for anything other than form errors.
