# Design Specification (Replication)

## 1) Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0071E3` | Main CTA, links, highlights |
| Primary Dark | `#005BB5` | Accent text and stronger action states |
| Primary Light | `#3B91EC` | Gradient blends and lighter accents |
| Base Dark | `#1D1D1F` | Primary text, dark surfaces |
| Base Dark Soft | `#333336` | Secondary dark accents |
| Text Secondary | `#6E6E73` | Subtext, helper text |
| Background Default | `#F5F5F7` | Main page background |
| Surface | `#FFFFFF` | Cards, chips, elevated surfaces |
| Divider | `#D2D2D7` | Borders and separators |
| Success | `#2F9E44` | Success state |
| Security Accent | `#66A6FF` | Security icon accents |

Background pattern:
- `radial-gradient(1200px 560px at 50% -14%, rgba(0,113,227,0.13) 0%, rgba(245,245,247,0) 72%), radial-gradient(760px 360px at 50% 108%, rgba(29,29,31,0.08) 0%, rgba(245,245,247,0) 72%), #F5F5F7`

## 2) Typography

Font family:
- `"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Type scale:
- Navbar brand: `1rem`, `600`, letter spacing `-0.02em`
- Hero heading: `2.25rem/3rem/4.7rem` (xs/sm/md), `700`, line-height `1.06/0.98`, letter spacing `-0.04em`
- Section heading: `1.9rem/2.4rem/3.15rem`, `700`, line-height `1.08`, letter spacing `-0.03em`
- Body lead: `1.03rem/1.3rem`, line-height `1.55`
- Overline/eyebrow: `600`, letter spacing `0.08em`, uppercase
- Buttons: `500`, letter spacing `-0.01em`, no forced uppercase

## 3) Spacing Scale

Layout spacing:
- Page horizontal padding: `{ xs: 1.6, sm: 2.4, md: 3.8 }`
- Bottom safe space (for fixed footer): `{ xs: 12, md: 13 }`
- App bar height: `{ xs: 64, md: 74 }`
- Scroll anchor margin: `94px`

Section rhythm:
- Hero: `pt { xs: 5, md: 9 }`, `pb { xs: 6, md: 9 }`
- Standard large sections: `py { xs: 6, md: 9 }`
- Medium sections: `py { xs: 6, md: 8 }`
- CTA section: `py { xs: 5, md: 7 }`

Component spacing:
- Glass card padding: `{ xs: 1.4, md: 1.8 }`
- Standard card padding: `{ xs: 2.2, md: 2.8 }`
- Large CTA card padding: `{ xs: 2.2, md: 3.4 }`

Radius:
- Base radius: `24px`
- Card radius: `28px`
- Accordion radius: `20px`
- Pill controls: `999px`

## 4) Nav/App Bar Behavior

Desktop:
- Sticky app bar, translucent light background, blur effect.
- Horizontal nav links + right aligned primary CTA.

Mobile:
- Right-side drawer menu.
- Drawer has soft translucent background + blur.
- Hamburger opens drawer, close icon/button dismisses.

Common:
- Thin bottom border for separation.
- Brand remains visible and legible.

## 5) Card Style

Base card:
- Background: white or white alpha (`~0.8-0.84`) for glass look.
- Border: `1px solid` divider/light alpha.
- Shadow: `0 12px 42px rgba(0, 0, 0, 0.06)`.
- Radius: `28px`.

Hover card (feature cards):
- Lift: `translateY(-4px)`.
- Shadow: `0 20px 45px rgba(0, 0, 0, 0.12)`.
- Border tint toward primary.
- Optional `backdrop-filter: blur(8px)`.

## 6) Button Styles

Primary (`contained`):
- Pill radius.
- Brand primary background (`#0071E3`).
- Hover: slight lift + shadow.

Secondary (`text`/`outlined`):
- Text uses primary or muted text color depending on context.
- Outlined on gradient areas uses white border/text with translucent hover fill.

Focus:
- Global focus-visible ring `3px solid #0071E3`, offset `2px`.

## 7) Animation Style

Motion language:
- Subtle and restrained.
- Easing: `ease`.

Durations:
- Button hover transition: `180ms`.
- Card hover transition: `220ms`.
- Hero text entrance (fade-up): `760ms`.
- Hero media entrance (zoom-in): `920ms`.

Patterns:
- Fade-up: opacity from `0` + translateY from `16px`.
- Zoom-in: opacity from `0` + scale from `0.98`.

## 8) Page Composition Patterns

Primary flow:
1. Sticky nav/app bar.
2. Hero headline + dual CTAs.
3. Hero media showcase.
4. Trust metrics row.
5. Feature cards grid.
6. How-it-works step cards.
7. Demo/gallery cards.
8. Security split section.
9. FAQ accordions.
10. Final CTA banner.
11. Compact fixed footer with legal links.

Legal pages:
- `/privacy` and `/terms` reuse same style language.
- Shared legal page shell with headline, updated date, and grouped policy cards.
