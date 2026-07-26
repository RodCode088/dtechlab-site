import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const files = ['index.html', '404.html', 'styles.css', 'overrides.css', 'script.js', 'robots.txt', 'sitemap.xml'];

await rm(dist, { recursive:true, force:true });
await mkdir(dist, { recursive:true });
for (const file of files) await cp(resolve(root, file), resolve(dist, file));
for (const asset of await readdir(resolve(root, 'public'))) {
  await cp(resolve(root, 'public', asset), resolve(dist, asset), { recursive:true });
}

const required = ['index.html', 'styles.css', 'overrides.css', 'script.js', '404.html', 'robots.txt', 'sitemap.xml', 'brand/favicon.ico', 'projects/gallo/homepage.png', 'projects/dcars/homepage.png', 'projects/mono-solo/homepage.png', 'projects/portfolio/homepage.png', 'projects/gallo/mobile.png', 'projects/dcars/mobile.png', 'projects/mono-solo/mobile.png', 'projects/portfolio/mobile.png'];
for (const file of required) await stat(resolve(dist, file));
console.log(`Build listo: ${required.length} artefactos críticos verificados en ${dist}`);
