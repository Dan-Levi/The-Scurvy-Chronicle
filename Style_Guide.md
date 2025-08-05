# The Scurvy Chronicle — Brutalist-Vintage Recolor Guide

A hand-inked, vintage newspaper look executed with brutalist confidence: thick lines, visible cross-hatching, bold blocks of color, and no polish. Everything should feel printed, stamped, or scrawled by a drunken pirate.

---

## 🎨 1. Color Palette & Roles

| Color     | Hex       | Role Description                                |
| --------- | --------- | ----------------------------------------------- |
| Parchment | `#F2E2CE` | Primary background, paper surfaces              |
| Rum       | `#D9AE89` | Secondary background, panels, large callouts    |
| Ember     | `#D97B59` | Accent color for buttons, badges, active states |
| Tar       | `#401801` | Warm dark for shadows, fills, illustration ink  |
| Ink       | `#0D0D0D` | Primary text, icons, outlines, and borders      |

**Recommended page distribution:**

- Parchment: 55–65%
- Rum: 15–20%
- Ink: 10–15%
- Tar: 5–8%
- Ember: 5–8%

---

## 🌍 2. Global Styling Principles

- **Backgrounds:** Use Parchment for overall layout. Add light cross-hatching for texture.
- **Borders:** All modules framed in thick Ink (3–6px). Use Tar for secondary inner lines.
- **Shadows:** Use hard offset shadows in Tar, not blurs.
- **Typography:** All type should appear printed—no light weights, no anti-alias softness.
- **Texture:** Subtle, repeating hand-inked hatching patterns can be used in backgrounds and shadows.

---

## 🧭 3. Top Bar & Navigation

- **Top bar background:** Tar
- **Text links:** Parchment
- **Hover state:** Thick block underline in Ember
- **Active page indicator:** Ember background tab with Ink border and Parchment text
- **Utility icons:** Default in Parchment with Ink stroke, inverted on hover

---

## 🏴‍☠️ 4. Masthead / Hero Section

- **Hero panel background:** Rum with double border (Ink outer, Tar inner)
- **Title lockup:**
  - “SCURVY” → Ink text on Parchment with thick Ink border
  - “CHRONICLE” → Parchment text on Ember with Ink border
- **Manifesto block:** On Parchment with a torn left edge shaded in Tar
- **Pirate illustration:** Framed in Ink, shadows with Tar hatching, highlights in Parchment

---

## 🔘 5. Button Styles

### Primary Button

- Ember background
- Ink text and border
- Shadow offset in Tar on hover

### Secondary Button

- Parchment background
- Ink text and border
- Rum fill on hover

### Tertiary Button

- Transparent background
- Ink text with thick underline
- Underline turns Ember on hover

### Disabled State

- Rum background, muted Ink text

---

## 📰 6. Article Cards ("Dispatches")

- **Card background:** Parchment with light hatching
- **Border:** Double-frame (Ink outer, Tar inner)
- **Category ribbon:** Ember fill, Ink text, folded corner in Tar
- **Thumbnail frame:** Same double border; corner overlay on hover
- **Meta text:** Tar
- **“Read” button:** Uses Primary style

---

## 🏷️ 7. Badges, Tags & Pagination

- **Badges:** Ember background, Ink text and outline
- **Pagination:**
  - Active: Tar background, Parchment text
  - Inactive: Parchment background, Ink border; Ember fill on hover
- **Notification counters:** Ember circle, Ink border

---

## 🔗 8. Links

- **Default:** Ink text, dashed underline in Tar
- **Hover:** Underline changes to solid Ember
- **Visited:** Tar text with Ember underline

---

## ✍️ 9. Forms & Inputs

- **Inputs:** Parchment background, Ink border, inner line in Tar
- **Focus state:** Ember outline surrounding existing border
- **Checkboxes/radios:** Heavy Ink outline, Ember check mark

---

## ⚓ 10. Footer

- **Footer background:** Tar
- **Footer text:** Parchment
- **Links:** Ember underline on hover
- **Legal strip:** Narrow Ink bar, Parchment text

---

## 🧵 11. Texture & Hatching Guidelines

- Use SVG-style cross-hatching in backgrounds, shadows, and illustration
- More hatching = more depth; keep textures subtle
- Never blur or fade elements—simulate with hard layers and printed artifacts

---

## ⚙️ 12. Motion & Interaction

- Small nudges (2–4px), fast transitions (100–150ms)
- No soft easing—use stepwise or hard cubic bezier
- Pressed states feel “smashed” down, not faded

---

## ✅ 13. Accessibility Considerations

- Ink text on Parchment or Rum provides excellent contrast
- Never use Parchment text on Ember or Rum backgrounds
- All small type should meet 4.5:1 contrast ratio or be increased in size/weight
- Stick to clear outlines, thick borders, and obvious hover states

---

## 📄 14. Page-Specific Notes

### Hero / Masthead

- Use Rum as background
- Alternate strips for title (Parchment / Ember)
- Manifesto block styled like a note stuck on a tavern wall

### Dispatch Grid

- Consistent card treatment
- Ribbon colors standardized to Ember
- Use Primary buttons for "Read Rant"

### Promo Block ("Brutal. Belligerent. Buggy.")

- Ember slab with Ink typography
- Sub-panels layered in Parchment with Ink offset shadows

---

## 🛠 15. Implementation Checklist

1. Apply the five core colors and define their roles
2. Replace all soft shadows with offset Tar shadows
3. Redesign top bar using Tar + Ember interactions
4. Style buttons according to visual hierarchy
5. Rebuild cards with hatching, borders, and Ember ribbons
6. Normalize focus, hover, and active states
7. Review footer, links, and inputs for consistent styles
8. Ensure everything passes accessibility
9. Avoid polish—embrace a tactile, "printed with errors" aesthetic

---

## ✅ Do & Don’t

**Do:**

- Use thick borders and clear labels
- Create visual hierarchy with layering and shadows
- Embrace bold color and honest contrast

**Don’t:**

- Use gradients, glows, or soft shadows
- Float text without clear background boundaries
- Sacrifice readability for stylistic embellishment

---
