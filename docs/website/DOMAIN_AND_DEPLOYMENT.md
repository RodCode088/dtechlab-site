# DTechLab Studio — Domain & Deployment

> Last updated: 2026-06-28
> WARNING: This document does NOT contain secrets. Never add passwords, tokens, or API keys here.

## Domain

| Field | Value |
|-------|-------|
| **Official domain** | `dtechlab.io` |
| **Registrar** | Unknown (not found in project files) |
| **DNS provider** | Unknown |
| **Status** | Referenced in code but not confirmed active |

### Domain references found in codebase

| File | Reference |
|------|-----------|
| `dtechlab-brand-identity.html` | `api.dtechlab.io/v1` |
| `dtechlab-homepage-ES.html` | `nexus.dtechlab.io`, `hello@dtechlab.io` |
| `dtechlab-instagram-pack.html` | `nexus.dtechlab.io`, `dtechlab.io` |
| `studio-social-pack.html` | `dtechlab.io/studio` (multiple) |
| `translations.js` | `https://dtechlab.io?lang=es` |
| `DTECHLAB_COMPLETE_ECOSYSTEM.md` (archived) | `dtechlab.io`, `store.dtechlab.io` |

## Hosting Platform

| Field | Value |
|-------|-------|
| **Platform** | Not configured yet |
| **Recommended options** | Vercel, Netlify, Cloudflare Pages, GitHub Pages |
| **Repository** | Current git repo (`tech lab`) |
| **Connected repo** | Not configured |

## Build Configuration

| Field | Value |
|-------|-------|
| **Build command** | None required (static HTML) |
| **Output directory** | Root (`./`) or selected HTML files |
| **Production branch** | `main` |
| **Framework** | None (static site) |

## Environment Variables Required

| Variable | Purpose | Has value? |
|----------|---------|-----------|
| None currently required | Static HTML, no server-side code | N/A |

## DNS Configuration Needed

| Record | Type | Value | Purpose |
|--------|------|-------|---------|
| `@` | A or CNAME | (hosting platform IP/domain) | Root domain |
| `www` | CNAME | `dtechlab.io` | www redirect |

### Redirect strategy
- `www.dtechlab.io` should redirect to `dtechlab.io` (or vice versa)
- All HTTP should redirect to HTTPS

## HTTPS

| Field | Status |
|-------|--------|
| SSL certificate | Pending (provided by hosting platform) |
| Force HTTPS | Pending |

## Assets for deployment

| Asset | Path | Status |
|-------|------|--------|
| Favicon | `brand/logos/digital/favicon/favicon.ico` | Ready |
| Apple Touch Icon | `brand/logos/digital/favicon/apple-touch-icon-180.png` | Ready |
| Maskable Icon | `brand/logos/digital/favicon/icon-512-maskable.png` | Ready |
| Open Graph image | Not yet created | Pending |
| robots.txt | Not yet created | Pending |
| sitemap.xml | Not yet created | Pending |

## Analytics

| Field | Status |
|-------|--------|
| Google Analytics | Not configured |
| Alternative | Consider Plausible or Fathom for privacy |

## Forms

| Form | Backend | Status |
|------|---------|--------|
| Contact form | FormSubmit.co | Active (rodophybusiness08@gmail.com) |
| WhatsApp link | wa.me/+50769837286 | Active |

## Email

| Field | Value |
|-------|-------|
| Business email | rodophybusiness08@gmail.com |
| Domain email | `hello@dtechlab.io` (referenced but unconfirmed) |
| Email provider | Unknown (Google Workspace referenced in logo kit) |

## Deployment Process

1. Select hosting platform
2. Connect git repository
3. Configure build settings (static, no build)
4. Point domain DNS to hosting platform
5. Enable HTTPS
6. Verify site loads correctly
7. Test all forms and links
8. Add robots.txt and sitemap.xml
9. Submit to Google Search Console

## Rollback Process

Since the site is static HTML:
1. Revert to previous git commit
2. Redeploy
3. No database or state to worry about

## Pending Before Deployment

- [ ] Confirm domain ownership and DNS access
- [ ] Choose hosting platform
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Create Open Graph image (1200x630)
- [ ] Confirm `hello@dtechlab.io` email exists (or remove references)
- [ ] Test site on staging URL before pointing domain
- [ ] Authorization from Rodolfo to proceed with DNS changes
