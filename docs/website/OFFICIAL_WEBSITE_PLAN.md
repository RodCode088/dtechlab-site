# DTechLab Studio — Official Website Plan

> Last updated: 2026-06-28

## Selected Base: `dtechlab-studio.html`

### Why this page

| Criteria | dtechlab-studio.html | dtechlab-homepage.html |
|----------|---------------------|----------------------|
| Focus | DTechLab Studio (actual business) | Multi-division ecosystem (premature) |
| Content accuracy | 100% real | References non-existent products |
| Services section | Detailed, grounded | Too broad |
| Contact form | Working (FormSubmit.co) | Working |
| Design quality | 5/5 | 5/5 |
| Responsive | Yes | Yes |
| SEO readiness | Good | Good |
| Work needed to publish | Minimal | Significant (remove fake products) |

`dtechlab-studio.html` represents what DTechLab Studio actually is today: a web design studio
run by Rodolfo Alabarca in Panama. The homepage tries to be too many things at once.

### Components worth recovering from dtechlab-homepage.html

| Component | Source | Worth migrating? |
|-----------|--------|-------------------|
| Hero animation | dtechlab-homepage.html | Optional (nice-to-have) |
| Service cards layout | dtechlab-homepage.html | No (studio version is better) |
| Work/portfolio section | dtechlab-homepage.html | Yes, if adapted to show real demos |
| Testimonials | N/A | No (none exist yet) |
| Product showcases | dtechlab-homepage.html | No (products do not exist) |

### Sections to discard from homepage

- "Products" section (Nexus, AutoPro)
- Any reference to divisions or sub-brands
- Fictional metrics or stats
- Store references

## Proposed Site Structure

```
dtechlab.io/
|-- / (index)              Main landing - what is DTechLab Studio
|-- /servicios             Detailed services breakdown
|-- /proyectos             Portfolio with demo templates
|-- /estudio               About the studio and Rodolfo
|-- /contacto              Contact form + WhatsApp + email
```

For launch, a single-page approach is acceptable (all sections in one HTML file
with anchor navigation), matching the current `dtechlab-studio.html` structure.
Multi-page routing can be added later when content justifies it.

## Content Requirements

### Allowed content
- What DTechLab Studio is
- Services available now (web design, digital systems, automation)
- Demo templates as portfolio pieces (clearly labeled as demos)
- Rodolfo Alabarca as founder
- Real contact information
- Process description
- Technology stack (when relevant)
- Target industries (legal, medical, real estate, hospitality, construction, e-commerce)
- Working contact form
- WhatsApp link

### Not allowed
- Invented clients or testimonials
- Invented metrics or results
- Products that do not exist
- Services that cannot be delivered yet
- Old logos
- Generic placeholder text

## Technology

- **Current**: Plain HTML + embedded CSS + inline JS
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Forms**: FormSubmit.co (rodophybusiness08@gmail.com)
- **WhatsApp**: +507 6983-7286
- **No build tools required** for launch

## Assets Required

| Asset | Source | Status |
|-------|--------|--------|
| Logo (favicon) | `brand/logos/digital/favicon/favicon.ico` | Ready |
| Logo (SVG inline) | `brand/logos/official/primary/dtechlab-mark-dark.svg` | Ready |
| Apple Touch Icon | `brand/logos/digital/favicon/apple-touch-icon-180.png` | Ready |
| Open Graph image | Needs creation from lockup | Pending |
| Social preview | `brand/logos/digital/social-profile/profile-avatar-512.png` | Ready |

## Tasks Before Publishing

1. [ ] Verify all logo instances use the new "Red de Datos" design
2. [ ] Create Open Graph image (1200x630) with new logo
3. [ ] Verify FormSubmit.co form is working
4. [ ] Verify WhatsApp link is correct
5. [ ] Add `<meta>` tags for SEO (title, description, OG tags)
6. [ ] Add robots.txt
7. [ ] Add sitemap.xml (if multi-page)
8. [ ] Test responsive design on mobile
9. [ ] Test all links
10. [ ] Configure domain DNS
11. [ ] Deploy to hosting platform
12. [ ] Verify HTTPS

## Risks

| Risk | Mitigation |
|------|-----------|
| No real client testimonials | Use demo templates as portfolio proof |
| Single-person operation | Present as boutique studio (strength, not weakness) |
| No analytics | Add after launch (Google Analytics or Plausible) |
| FormSubmit.co free tier limits | Monitor, upgrade if needed |
