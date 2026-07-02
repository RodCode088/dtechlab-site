# DTechLab — Logo Kit

Kit completo de la marca **DTechLab** en todos los formatos. Reconstruido desde la
identidad de marca oficial (`dtechlab-brand-identity.html`).

## Colores de marca
| Uso | Hex |
|-----|-----|
| Azul primario (marca sobre fondo oscuro) | `#5B6AFF` |
| Azul reversa (marca sobre fondo claro) | `#3A4AFF` |
| Fondo Void (negro de marca) | `#050507` |
| Texto oscuro (Graphite) | `#111118` |
| Blanco | `#FFFFFF` |

Tipografía del wordmark: **Segoe UI Semibold** (peso 500–600), tracking -0.02em.

## Estructura de la carpeta

```
DTechLab-Logo/
├─ svg/                       Fuente vectorial (escalable, sin pérdida) — el master
│   ├─ dtechlab-mark.svg            marca sola, azul primario
│   ├─ dtechlab-mark-light.svg      marca sola, azul reversa (fondo claro)
│   ├─ dtechlab-lockup-dark.svg     marca + "DTechLab" texto blanco
│   └─ dtechlab-lockup-light.svg    marca + "DTechLab" texto oscuro
├─ png-mark-transparent/      Solo la marca, fondo transparente (16→1024 px)
├─ png-mark-on-black/         Marca sobre negro de marca (#050507)
├─ png-mark-on-white/         Marca sobre blanco
├─ lockup/                    Logo horizontal completo (marca + wordmark), 2000 px
├─ favicon/                   favicon.ico multi-resolución + apple-touch-icon + maskable
└─ google-workspace/          Archivos listos para subir a Google Workspace
```

## Qué subir en Google Workspace

1. **Logo de la empresa (header del Admin console / branding)**
   Admin console → Cuenta → *Personalización* → Logo personalizado.
   - Sube **`google-workspace/company-logo-320x132-light.png`**
     (el header es blanco, por eso la versión clara).
   - Requisito de Google: PNG/GIF transparente, recomendado **320 × 132 px**. ✅

2. **Foto de perfil / avatar de la organización (Gmail, Meet, etc.)**
   - Usa **`google-workspace/profile-avatar-512.png`** (cuadrado, 512×512, sobre negro de marca).
   - También sirve **`png-mark-on-black/dtechlab-mark-black-512.png`**.

3. **Favicon (si publicas un sitio con Google Sites o dominio)**
   - **`favicon/favicon.ico`** (incluye 16/32/48/64/128/256).
   - **`favicon/apple-touch-icon-180.png`** para iOS.

4. **Firma de correo / documentos**
   - **`lockup/dtechlab-lockup-on-white.png`** o `...-transparent.png`.

> Consejo: para web y firmas, prefiere los SVG en `svg/` cuando el medio lo permita
> (nunca pierden calidad). Los PNG son para donde solo se aceptan imágenes rasterizadas.
