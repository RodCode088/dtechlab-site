const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const outDir = __dirname;

const brand = {
  void: "#050507",
  abyss: "#0A0A0F",
  graphite: "#111118",
  slate: "#1A1A24",
  pure: "#FFFFFF",
  fog: "#E8E8F0",
  ghost: "#9898A8",
  whisper: "#4A4A5C",
  signal: "#5B6AFF",
  ice: "#A8B4FF",
  plasma: "#8B5CF6",
  arc: "#22D3EE",
};

const formats = [
  { id: "whatsapp-vertical", label: "WHATSAPP VERTICAL", width: 1080, height: 1350 },
  { id: "square", label: "CUADRADO", width: 1080, height: 1080 },
  { id: "story", label: "STORY", width: 1080, height: 1920 },
];

function logo(x, y, scale = 1) {
  const s = scale;
  return `
  <g transform="translate(${x} ${y}) scale(${s})" class="brand-lockup">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="1" y="1" width="30" height="30" rx="8" stroke="${brand.signal}" stroke-width="1.5"/>
      <rect x="8" y="8" width="7" height="7" rx="1.5" fill="${brand.signal}"/>
      <rect x="17" y="8" width="7" height="7" rx="1.5" fill="${brand.signal}" opacity="0.4"/>
      <rect x="8" y="17" width="7" height="7" rx="1.5" fill="${brand.signal}" opacity="0.4"/>
      <rect x="17" y="17" width="7" height="7" rx="1.5" fill="${brand.signal}"/>
    </svg>
    <text x="44" y="22" fill="${brand.pure}" font-size="22" font-weight="500" letter-spacing="-0.4">DTechLab</text>
  </g>`;
}

function textBlock(lines, x, y, size, weight, fill, lineHeight, opts = {}) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}" letter-spacing="${opts.tracking || 0}" class="${opts.className || ""}">
    ${lines.map((line, index) => `<tspan x="${x}" dy="${index ? lineHeight : 0}">${line}</tspan>`).join("")}
  </text>`;
}

function websiteMockup(x, y, w, h) {
  const navH = 46;
  const uid = `screen${Math.round(x)}${Math.round(y)}${Math.round(w)}`;
  return `
  <g transform="translate(${x} ${y})" class="website-screen">
    <defs>
      <linearGradient id="${uid}Hero" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#080A14"/>
        <stop offset="0.58" stop-color="#111827"/>
        <stop offset="1" stop-color="#2636A8"/>
      </linearGradient>
      <radialGradient id="${uid}Photo" cx="50%" cy="38%" r="68%">
        <stop stop-color="#F8FAFC"/>
        <stop offset="0.28" stop-color="#A8B4FF"/>
        <stop offset="0.62" stop-color="#5B6AFF"/>
        <stop offset="1" stop-color="#111827"/>
      </radialGradient>
      <linearGradient id="${uid}Gold" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#FEF3C7"/>
        <stop offset="1" stop-color="#F59E0B"/>
      </linearGradient>
      <clipPath id="${uid}Clip"><rect width="${w}" height="${h}" rx="12"/></clipPath>
      <clipPath id="${uid}PhotoClip"><rect x="${w * 0.58}" y="${navH + 32}" width="${w * 0.34}" height="${h * 0.5}" rx="18"/></clipPath>
    </defs>

    <g clip-path="url(#${uid}Clip)">
      <rect width="${w}" height="${h}" fill="#F8FAFC"/>
      <rect width="${w}" height="${navH}" fill="#FFFFFF"/>
      <circle cx="24" cy="23" r="4" fill="#E2E8F0"/><circle cx="40" cy="23" r="4" fill="#E2E8F0"/><circle cx="56" cy="23" r="4" fill="#E2E8F0"/>
      <rect x="88" y="17" width="92" height="10" rx="5" fill="#0F172A"/>
      <rect x="${w - 248}" y="17" width="38" height="8" rx="4" fill="#CBD5E1"/>
      <rect x="${w - 194}" y="17" width="38" height="8" rx="4" fill="#CBD5E1"/>
      <rect x="${w - 140}" y="17" width="38" height="8" rx="4" fill="#CBD5E1"/>
      <rect x="${w - 70}" y="12" width="48" height="20" rx="7" fill="${brand.signal}"/>

      <rect x="0" y="${navH}" width="${w}" height="${h * 0.68}" fill="url(#${uid}Hero)"/>
      <circle cx="${w * 0.78}" cy="${navH + 118}" r="150" fill="${brand.signal}" opacity="0.22"/>
      <circle cx="${w * 0.56}" cy="${navH + 258}" r="120" fill="${brand.arc}" opacity="0.09"/>
      <path d="M0 ${navH + h * 0.47} C${w * 0.28} ${navH + h * 0.39}, ${w * 0.57} ${navH + h * 0.61}, ${w} ${navH + h * 0.47} V${navH + h * 0.68} H0Z" fill="#F8FAFC"/>

      <g transform="translate(36 ${navH + 34})">
        <rect width="122" height="20" rx="10" fill="${brand.signal}" opacity="0.18"/>
        <text x="16" y="14" fill="${brand.ice}" font-size="10" font-weight="700" letter-spacing="1.4" class="mono">NUEVA COLECCION</text>
        <text x="0" y="66" fill="#FFFFFF" font-size="34" font-weight="740" letter-spacing="-1.1">Luma Studio</text>
        <text x="0" y="101" fill="#FFFFFF" font-size="34" font-weight="740" letter-spacing="-1.1">Reserva en línea</text>
        <rect x="0" y="132" width="${w * 0.4}" height="9" rx="5" fill="#CBD5E1" opacity="0.72"/>
        <rect x="0" y="151" width="${w * 0.31}" height="9" rx="5" fill="#CBD5E1" opacity="0.5"/>
        <rect x="0" y="184" width="122" height="34" rx="10" fill="#FFFFFF"/>
        <text x="24" y="206" fill="#0F172A" font-size="13" font-weight="700">Reservar ahora</text>
        <rect x="142" y="184" width="104" height="34" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)"/>
        <text x="164" y="206" fill="#FFFFFF" font-size="13" font-weight="560">Ver galería</text>
      </g>

      <g clip-path="url(#${uid}PhotoClip)">
        <rect x="${w * 0.58}" y="${navH + 32}" width="${w * 0.34}" height="${h * 0.5}" fill="url(#${uid}Photo)"/>
        <circle cx="${w * 0.75}" cy="${navH + 132}" r="74" fill="#FFFFFF" opacity="0.18"/>
        <path d="M${w * 0.62} ${navH + 218} C${w * 0.69} ${navH + 168}, ${w * 0.8} ${navH + 168}, ${w * 0.89} ${navH + 218} V${navH + 250} H${w * 0.62}Z" fill="#FFFFFF" opacity="0.94"/>
        <rect x="${w * 0.66}" y="${navH + 236}" width="${w * 0.17}" height="10" rx="5" fill="#111827"/>
        <circle cx="${w * 0.86}" cy="${navH + 70}" r="24" fill="url(#${uid}Gold)"/>
        <path d="M${w * 0.59} ${navH + 35} L${w * 0.92} ${navH + 230}" stroke="#FFFFFF" stroke-opacity="0.14" stroke-width="18"/>
      </g>

      <g transform="translate(${w * 0.52} ${navH + 214})">
        <rect width="136" height="62" rx="14" fill="rgba(255,255,255,0.92)"/>
        <text x="16" y="23" fill="#64748B" font-size="10" font-weight="700" letter-spacing="1" class="mono">CONVERSION</text>
        <text x="16" y="50" fill="#0F172A" font-size="24" font-weight="800">+38%</text>
        <path d="M88 43 C100 24, 114 34, 124 18" stroke="${brand.signal}" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>

      <g transform="translate(34 ${h - 128})">
        <rect width="${w - 68}" height="94" rx="15" fill="#FFFFFF"/>
        <text x="22" y="29" fill="#0F172A" font-size="16" font-weight="760">Sistema listo para vender</text>
        <rect x="22" y="48" width="118" height="9" rx="5" fill="#94A3B8"/>
        <rect x="22" y="66" width="88" height="9" rx="5" fill="#CBD5E1"/>
        <g transform="translate(${w * 0.39} 18)">
          <rect width="80" height="58" rx="12" fill="#EEF2FF"/>
          <text x="16" y="26" fill="${brand.signal}" font-size="18" font-weight="800">24/7</text>
          <text x="16" y="44" fill="#64748B" font-size="9" font-weight="650">CONTACTO</text>
        </g>
        <g transform="translate(${w * 0.56} 18)">
          <rect width="80" height="58" rx="12" fill="#ECFEFF"/>
          <text x="16" y="26" fill="#0891B2" font-size="18" font-weight="800">SEO</text>
          <text x="16" y="44" fill="#64748B" font-size="9" font-weight="650">GOOGLE</text>
        </g>
        <g transform="translate(${w * 0.73} 18)">
          <rect width="80" height="58" rx="12" fill="#F5F3FF"/>
          <text x="16" y="26" fill="${brand.plasma}" font-size="18" font-weight="800">WA</text>
          <text x="16" y="44" fill="#64748B" font-size="9" font-weight="650">VENTAS</text>
        </g>
      </g>
    </g>
  </g>`;
}

function monitor(cx, cy, scale) {
  const w = 760 * scale;
  const h = 470 * scale;
  const x = cx - w / 2;
  const y = cy - h / 2;
  return `
  <g class="premium-monitor">
    <ellipse cx="${cx}" cy="${y + h + 88 * scale}" rx="${345 * scale}" ry="${34 * scale}" fill="#000" opacity="0.42"/>
    <path d="M${cx - 116 * scale} ${y + h - 6 * scale} L${cx + 116 * scale} ${y + h - 6 * scale} L${cx + 152 * scale} ${y + h + 92 * scale} L${cx - 152 * scale} ${y + h + 92 * scale}Z" fill="url(#stand)" stroke="rgba(255,255,255,0.08)" stroke-width="${1.2 * scale}"/>
    <rect x="${cx - 202 * scale}" y="${y + h + 82 * scale}" width="${404 * scale}" height="${24 * scale}" rx="${12 * scale}" fill="url(#base)" stroke="rgba(255,255,255,0.08)" stroke-width="${1.2 * scale}"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${30 * scale}" fill="url(#bezel)" stroke="rgba(255,255,255,0.16)" stroke-width="${1.5 * scale}"/>
    <rect x="${x + 20 * scale}" y="${y + 20 * scale}" width="${w - 40 * scale}" height="${h - 40 * scale}" rx="${18 * scale}" fill="#050507"/>
    <g transform="scale(${scale})">
      ${websiteMockup((x + 38 * scale) / scale, (y + 38 * scale) / scale, (w - 76 * scale) / scale, (h - 76 * scale) / scale)}
    </g>
    <rect x="${x + 20 * scale}" y="${y + 20 * scale}" width="${w - 40 * scale}" height="${h - 40 * scale}" rx="${18 * scale}" fill="url(#screenSheen)" opacity="0.45"/>
  </g>`;
}

function benefits(x, y, columns = 2, size = 27, colW = 380, rowGap = 54) {
  const items = [
    "Diseño profesional",
    "Adaptable a celulares",
    "Optimizada para Google",
    "Formularios de contacto",
    "Integración con WhatsApp",
    "Entrega rápida",
  ];
  return `<g class="benefits" font-size="${size}" font-weight="380" fill="${brand.fog}">
    ${items.map((item, i) => {
      const col = columns === 2 ? i % 2 : 0;
      const row = columns === 2 ? Math.floor(i / 2) : i;
      const tx = x + col * colW;
      const ty = y + row * rowGap;
      return `<g transform="translate(${tx} ${ty})">
        <circle cx="12" cy="-8" r="11" fill="${brand.signal}" opacity="0.16"/>
        <path d="M6 -8 L10 -4 L18 -15" stroke="${brand.arc}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="34" y="0">${item}</text>
      </g>`;
    }).join("")}
  </g>`;
}

function artwork(format) {
  const { width: W, height: H, label } = format;
  const isStory = H > 1500;
  const isSquare = H === W;
  const logoY = isStory ? 82 : 58;
  const monitorY = isStory ? 560 : isSquare ? 350 : 390;
  const monitorScale = isStory ? 1.08 : isSquare ? 0.82 : 0.9;
  const titleY = isStory ? 990 : isSquare ? 605 : 735;
  const titleSize = isStory ? 82 : isSquare ? 58 : 64;
  const copyY = titleY + (isStory ? 178 : isSquare ? 128 : 142);
  const priceY = isStory ? 1388 : isSquare ? 830 : 1002;
  const benefitsY = isStory ? 1534 : isSquare ? 842 : 1018;
  const ctaY = isStory ? 1740 : isSquare ? 944 : 1208;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>DTechLab flyer web services ${label}</title>
<defs>
  <radialGradient id="bgGlow" cx="50%" cy="16%" r="72%">
    <stop offset="0%" stop-color="${brand.signal}" stop-opacity="0.24"/>
    <stop offset="42%" stop-color="${brand.plasma}" stop-opacity="0.07"/>
    <stop offset="100%" stop-color="${brand.void}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="bezel" x1="0" y1="0" x2="1" y2="1">
    <stop stop-color="#2B2B38"/><stop offset="0.48" stop-color="#08080D"/><stop offset="1" stop-color="#1A1A24"/>
  </linearGradient>
  <linearGradient id="stand" x1="0" y1="0" x2="0" y2="1">
    <stop stop-color="#242433"/><stop offset="1" stop-color="#0A0A0F"/>
  </linearGradient>
  <linearGradient id="base" x1="0" y1="0" x2="1" y2="1">
    <stop stop-color="#303041"/><stop offset="1" stop-color="#111118"/>
  </linearGradient>
  <linearGradient id="screenSheen" x1="0" y1="0" x2="1" y2="1">
    <stop stop-color="#FFFFFF" stop-opacity="0.24"/><stop offset="0.34" stop-color="#FFFFFF" stop-opacity="0.03"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="priceFill" x1="0" y1="0" x2="1" y2="1">
    <stop stop-color="${brand.signal}"/><stop offset="1" stop-color="${brand.arc}"/>
  </linearGradient>
  <pattern id="dotGrid" width="32" height="32" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="1" fill="#FFFFFF" opacity="0.055"/>
  </pattern>
  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="28" stdDeviation="42" flood-color="#000000" flood-opacity="0.45"/>
  </filter>
  <style>
    text { font-family: Inter, Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .mono { font-family: "JetBrains Mono", "Courier New", monospace; }
  </style>
</defs>

<rect width="${W}" height="${H}" fill="${brand.void}"/>
<rect width="${W}" height="${H}" fill="url(#bgGlow)"/>
<rect width="${W}" height="${H}" fill="url(#dotGrid)" opacity="0.8"/>
<path d="M0 ${H * 0.18} C${W * 0.32} ${H * 0.1}, ${W * 0.52} ${H * 0.31}, ${W} ${H * 0.2}" stroke="${brand.signal}" stroke-opacity="0.16" stroke-width="1"/>
<path d="M${W * 0.07} ${H * 0.08} H${W * 0.93}" stroke="#FFFFFF" stroke-opacity="0.06"/>

${logo(70, logoY, 1.14)}
<text x="${W - 70}" y="${logoY + 24}" text-anchor="end" fill="${brand.ghost}" font-size="18" letter-spacing="2.8" class="mono">STUDIO / WEB SYSTEMS</text>

<g filter="url(#softShadow)">${monitor(W / 2, monitorY, monitorScale)}</g>

${textBlock(
  isSquare ? ["Tu negocio merece", "una web que venda."] : ["Tu negocio merece una", "página web que venda."],
  70,
  titleY,
  titleSize,
  260,
  brand.pure,
  titleSize * 0.94,
  { tracking: -3.2 }
)}

${textBlock(
  isSquare
    ? ["Diseños modernos, rápidos y optimizados", "para convertir visitantes en clientes."]
    : ["Diseños modernos, rápidos y optimizados para convertir", "visitantes en clientes."],
  74,
  copyY,
  isStory ? 32 : 29,
  360,
  brand.ghost,
  isStory ? 46 : 41
)}

<g transform="translate(70 ${priceY})">
  <rect width="${isSquare ? 430 : 470}" height="${isSquare ? 92 : 104}" rx="14" fill="rgba(91,106,255,0.13)" stroke="rgba(91,106,255,0.36)"/>
  <text x="28" y="${isSquare ? 38 : 42}" fill="${brand.ice}" font-size="${isSquare ? 22 : 24}" font-weight="520" letter-spacing="2.2" class="mono">PLANES DESDE</text>
  <text x="27" y="${isSquare ? 82 : 92}" fill="url(#priceFill)" font-size="${isSquare ? 58 : 66}" font-weight="780" letter-spacing="-2">$199</text>
</g>

${benefits(
  isSquare ? 520 : isStory ? 74 : 530,
  benefitsY,
  2,
  isStory ? 29 : isSquare ? 18 : 19,
  isStory ? 420 : isSquare ? 300 : 285,
  isStory ? 56 : isSquare ? 42 : 43
)}

<g transform="translate(70 ${ctaY})">
  <rect width="${isStory ? 560 : isSquare ? 500 : 520}" height="${isStory ? 78 : isSquare ? 64 : 68}" rx="10" fill="${brand.signal}"/>
  <text x="${isStory ? 280 : isSquare ? 250 : 260}" y="${isStory ? 50 : isSquare ? 41 : 44}" text-anchor="middle" fill="${brand.pure}" font-size="${isStory ? 25 : isSquare ? 21 : 22}" font-weight="700" letter-spacing="1.2">SOLICITA TU COTIZACIÓN</text>
  <text x="${isStory ? 612 : isSquare ? 532 : 552}" y="${isStory ? 48 : isSquare ? 40 : 43}" fill="${brand.ghost}" font-size="${isStory ? 20 : isSquare ? 20 : 20}" font-weight="360">Cupos limitados para nuevos proyectos</text>
</g>

<text x="70" y="${H - 48}" fill="${brand.whisper}" font-size="15" letter-spacing="2.4" class="mono">DTECHLAB.SYSTEMS</text>
<text x="${W - 70}" y="${H - 48}" text-anchor="end" fill="${brand.whisper}" font-size="15" letter-spacing="2.4" class="mono">BUILD.2026 / PREMIUM WEB</text>
</svg>`;
}

async function render() {
  for (const format of formats) {
    const svg = artwork(format);
    const svgPath = path.join(outDir, `${format.id}.svg`);
    const pngPath = path.join(outDir, `${format.id}.png`);
    const jpgPath = path.join(outDir, `${format.id}.jpg`);
    fs.writeFileSync(svgPath, svg, "utf8");
    await sharp(Buffer.from(svg)).png().toFile(pngPath);
    await sharp(Buffer.from(svg)).jpeg({ quality: 94, mozjpeg: true }).toFile(jpgPath);
    console.log(`${format.id}: ${format.width}x${format.height}`);
  }
}

render().catch((error) => {
  console.error(error);
  process.exit(1);
});
