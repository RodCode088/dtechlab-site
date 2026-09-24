import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const files = ['index.html', 'portafolio.html', 'precios.html', 'operacion.html', 'complementos.html', 'contacto.html', 'preguntas-frecuentes.html', 'privacidad.html', '404.html', 'styles.css', 'overrides.css', 'premium.css', 'portfolio.css', 'script.js', 'pricing-configurator.js', 'lead-config.js', 'robots.txt', 'sitemap.xml', 'code-hero.jpg', 'code.avif'];

await rm(dist, { recursive:true, force:true });
await mkdir(dist, { recursive:true });
for (const file of files) await cp(resolve(root, file), resolve(dist, file));
for (const asset of await readdir(resolve(root, 'public'))) {
  await cp(resolve(root, 'public', asset), resolve(dist, asset), { recursive:true });
}

const required = ['index.html', 'portafolio.html', 'precios.html', 'operacion.html', 'complementos.html', 'contacto.html', 'preguntas-frecuentes.html', 'privacidad.html', 'styles.css', 'overrides.css', 'premium.css', 'portfolio.css', 'script.js', 'pricing-configurator.js', 'lead-config.js', '404.html', 'robots.txt', 'sitemap.xml', 'code-hero.jpg', 'code.avif', '_headers', '_redirects', 'og/dtechlab-share.jpg', 'brand/favicon.ico', 'projects/carlos-lopez/homepage.png', 'projects/carlos-lopez/mobile.png', 'client-logos/carlos-lopez.png', 'client-logos/sommelier-nomada.jpg', 'site-media/trabajando-en-mac.png', 'site-media/mostrando-sitio-web-original.png', 'site-media/trabajando-vista-pc-heritage.png', 'projects/heritage/homepage.png', 'projects/heritage/mobile.png', 'projects/heritage/tour.mp4', 'projects/sommelier/homepage.png', 'projects/sommelier/mobile.png', 'projects/sommelier/tour.mp4', 'projects/gallo/homepage.png', 'projects/gallo/mobile.png', 'projects/gallo/tour.mp4', 'projects/dcars/homepage.png', 'projects/dcars/mobile.png', 'projects/dcars/tour.mp4', 'projects/mono-solo/homepage.png', 'projects/mono-solo/mobile.png', 'projects/mono-solo/tour.mp4'];
required.push('projects/tecnicars/homepage.png', 'projects/tecnicars/mobile.png');
for (const file of required) await stat(resolve(dist, file));
console.log(`Build listo: ${required.length} artefactos críticos verificados en ${dist}`);
