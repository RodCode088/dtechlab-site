# DTechLab Studio — Visual System

> Última actualización: 2026-06-28

## Logo

**Diseño vigente**: "Red de Datos" (4 nodos conectados)
**Referencia**: `docs/brand/LOGO_SOURCE_OF_TRUTH.md`
**Assets**: `brand/logos/`

## Paleta de colores

### CSS Variables (sistema de diseño web)
```css
:root {
  --void: #050507;
  --abyss: #0A0A0F;
  --graphite: #111118;
  --signal: #5B6AFF;
  --signal-light: #3A4AFF;
  --arc: #22D3EE;
  --plasma: #8B5CF6;
  --white: #FFFFFF;
  --glass: rgba(255,255,255,0.05);
  --glass-border: rgba(255,255,255,0.08);
}
```

## Tipografía web

```css
/* Títulos */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 700;

/* Cuerpo */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 400;

/* Wordmark del logo */
font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
font-weight: 600;
letter-spacing: -0.02em;
```

## Componentes visuales

### Glassmorphism
Fondo semitransparente con borde sutil para tarjetas y contenedores.
```css
background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,255,255,0.06);
border-radius: 16px;
backdrop-filter: blur(20px);
```

### Gradientes de marca
```css
/* Gradiente principal */
background: linear-gradient(135deg, #5B6AFF, #8B5CF6);

/* Gradiente de texto */
background: linear-gradient(135deg, #5B6AFF, #22D3EE);
-webkit-background-clip: text;
```

### Sombras
```css
/* Sombra de elevación */
box-shadow: 0 25px 50px rgba(0,0,0,0.3);

/* Glow de marca */
box-shadow: 0 0 40px rgba(91,106,255,0.15);
```

## Iconografía

Estilo: líneas finas, monocromáticas, coherentes con los nodos del logo.
Tamaño base: 24px.
Stroke-width: 1.5px.

## Fotografía

- Preferir fondos oscuros.
- Tonos fríos (azules, púrpuras).
- Alta calidad, sin marcas de agua.
- Stock permitido solo de Unsplash con atribución cuando sea requerida.

## Espaciado

Sistema de 8px: todos los márgenes y paddings en múltiplos de 8.
Base: 8, 16, 24, 32, 48, 64, 96, 128.
