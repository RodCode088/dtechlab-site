import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const files = ['index.html', 'portafolio.html', '404.html', 'styles.css', 'overrides.css', 'portfolio.css', 'script.js', 'lead-config.js', 'robots.txt', 'sitemap.xml'];

await rm(dist, { recursive:true, force:true });
await mkdir(dist, { recursive:true });
for (const file of files) await cp(resolve(root, file), resolve(dist, file));
for (const asset of await readdir(resolve(root, 'public'))) {
  await cp(resolve(root, 'public', asset), resolve(dist, asset), { recursive:true });
}

const required = ['index.html', 'portafolio.html', 'styles.css', 'overrides.css', 'portfolio.css', 'script.js', 'lead-config.js', '404.html', 'robots.txt', 'sitemap.xml', 'brand/favicon.ico', 'projects/heritage/homepage.png', 'projects/heritage/mobile.png', 'projects/heritage/tour.mp4', 'projects/sommelier/homepage.png', 'projects/sommelier/mobile.png', 'projects/sommelier/tour.mp4', 'projects/gallo/homepage.png', 'projects/gallo/tour.mp4', 'projects/dcars/homepage.png', 'projects/dcars/mobile.png', 'projects/dcars/tour.mp4', 'projects/mono-solo/homepage.png', 'projects/mono-solo/tour.mp4'];
for (const file of required) await stat(resolve(dist, file));
console.log(`Build listo: ${required.length} artefactos críticos verificados en ${dist}`);
