# DTechLab — Kit de marca v2 · "T ruteada"

Marca nueva: la **T** de Tech con una pista en L calada y una **D** como terminal.
Un solo dibujo, monocromático, sin degradados ni versiones especiales.

Sustituye por completo al kit anterior ("Red de datos", 4 nodos). El kit viejo queda
en `uploads/logos/` solo como archivo histórico: no lo uses más.

## Colores

| Uso | Hex |
|-----|-----|
| Negro de marca (fondo y marca en claro) | `#0b0b0d` |
| Papel (fondo claro) | `#f2f1ec` |
| Blanco (marca en oscuro) | `#FFFFFF` |
| Azul acento (solo acentos, nunca el logo) | `#5B6AFF` |
| Azul acento sobre fondo claro | `#3A4AFF` |

El azul salió del logo a propósito. Ahora es el único acento del sistema: un botón,
un subrayado, un dato. Un logo neutro aguanta cualquier fondo.

Tipografía del wordmark: **Space Grotesk** SemiBold (600), tracking -0.02em.

## Formatos

- **SVG** `svg/` — vector, el maestro. Úsalo siempre que el medio lo permita.
- **PNG** `png/` `favicon/` — con transparencia donde corresponde. Para pantalla, redes y web.
- **JPG** `jpg/` — sin transparencia (fondo sólido). Para plataformas que no aceptan PNG.
- **ICO** `favicon/favicon.ico` — favicon clásico 16/32/48 en un archivo.
- **HTML** `firmas/` y los manuales — la firma de correo y los documentos.
- **PDF** `pdf/` — abre `pdf/manual-de-marca-imprimible.html` y usa
  *Imprimir → Guardar como PDF* (tamaño carta, sin márgenes). El archivo ya está
  paginado en 4 páginas; el navegador no añade fechas ni URLs.

## Documentos

- `manual-de-marca.html` — este kit explicado en una hoja: la marca, tamaños,
  color, lockups, firmas y qué subir dónde. Un solo archivo, funciona sin internet.
- `plan-instagram.html` — el lienzo completo de exploración: opciones de foto de
  perfil, el carrusel de presentación, el plan de feed y todas las rondas de logo.

## Estructura

```
marca-dtechlab/
├─ manual-de-marca.html   Hoja de marca (abrir en el navegador)
├─ plan-instagram.html    Plan de contenido y exploración de marca
├─ svg/                 Maestros vectoriales (usa estos siempre que el medio lo permita)
│   ├─ isotipo-blanco / -negro / -azul .svg     marca sola, fondo transparente
│   ├─ avatar-oscuro / -claro / -azul .svg      campo completo 1:1 (redes, perfiles)
│   ├─ lockup-horizontal-*.svg                  marca + DTechLab + Desarrollo web
│   └─ lockup-vertical-*.svg
├─ png/                 Avatares 1024→16 e isotipos transparentes 1024→128
├─ jpg/                 Las mismas piezas en JPG con fondo sólido
├─ pdf/                 Manual paginado listo para "Guardar como PDF"
├─ favicon/             favicon.ico (16/32/48), apple-touch 180, icon 512 y maskable
├─ google-workspace/    profile-avatar-512.png + company-logo (PNG del lockup)
└─ firmas/              4 firmas de correo en HTML, imagen ya embebida
```

## Qué subir dónde

1. **Instagram / avatar** → `png/avatar-oscuro-512.png`
2. **Google Workspace · avatar** → `google-workspace/profile-avatar-512.png`
3. **Google Workspace · logo de empresa** → `google-workspace/company-logo-claro.png`
4. **Favicon web** → `favicon/favicon.ico` + `favicon/apple-touch-icon-180.png`
5. **Firma de correo** → abre `firmas/horizontal-oscuro.html` (o claro) en el navegador,
   selecciona todo el bloque, cópialo y pégalo en la firma de Gmail. La imagen va
   embebida en el archivo, así que no depende de ningún servidor.

## Reglas

- **A 16 px la pista desaparece.** Es intencional: el favicon de 16 px usa la versión
  sin pista. No la simplifiques a mano en otros tamaños.
- Nunca rellenes la pista ni el ojo de la D: son huecos reales, por eso la marca
  funciona sobre foto, sobre negro y sobre el azul sin retoques.
- No rotes, no inclines, no le pongas sombra ni contorno.
- Espacio libre mínimo alrededor: la altura de la barra de la T.
- Sobre fotografía: usa `avatar-oscuro` (campo negro completo), nunca el isotipo suelto.
