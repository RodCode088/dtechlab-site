# DTechLab CMS

Panel de administración creado con Payload 3 y Next.js. Puede ejecutarse totalmente gratis en modo local con SQLite o publicarse en Render Free usando Supabase PostgreSQL y Supabase Storage.

## Practicar localmente

1. Copia `.env.example` como `.env`.
2. Conserva `PAYLOAD_DB_MODE=sqlite`.
3. Sustituye `PAYLOAD_SECRET` por una cadena aleatoria larga.
4. Instala y prepara el contenido:

   ```bash
   npm install
   npm run seed
   npm run dev
   ```

5. Abre `http://localhost:3000/admin` y crea el primer usuario. El primer usuario se convierte automáticamente en administrador.

La base local `dtechlab-cms.db` y los archivos de `media/` están ignorados por Git.

## Contenido disponible

- Proyectos: textos, orden, enlaces, estado de publicación, portadas y recorrido en video.
- Archivos: imágenes y videos con tamaños derivados para escritorio y móvil.
- Configuración del sitio: portada, contacto y redes.
- Usuarios: roles de administrador y editor.
- Borradores, versiones, publicación programada y API REST/GraphQL.

La API pública de proyectos está disponible en:

```text
GET /api/projects?sort=order&depth=1
```

Solo se devuelven proyectos publicados. Las operaciones de escritura requieren autenticación.

## Conectar Supabase

En Supabase crea un proyecto gratuito y un bucket llamado `dtechlab-cms`. Después configura en Render:

```text
PAYLOAD_DB_MODE=postgres
DATABASE_URL=<Session Pooler de Supabase, puerto 5432>
NEXT_PUBLIC_SERVER_URL=https://dtechlab-cms.onrender.com
PUBLIC_SITE_URL=https://www.dtechl.com
S3_BUCKET=dtechlab-cms
S3_ENDPOINT=https://<project-ref>.supabase.co/storage/v1/s3
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=<Supabase S3 access key>
S3_SECRET_ACCESS_KEY=<Supabase S3 secret key>
```

Nunca guardes estas credenciales en Git. El archivo `render.yaml` declara las variables como secretos sin incluir sus valores.

## Desplegar gratis en Render

1. Publica el repositorio en GitHub.
2. En Render selecciona **New → Blueprint**.
3. Conecta `dtechlab-site` y elige la rama configurada para producción.
4. Render detectará `render.yaml` y creará `dtechlab-cms` en el plan gratuito.
5. Completa las variables secretas solicitadas y despliega.

Render puede dormir el servicio tras 15 minutos sin tráfico. El primer acceso al panel puede tardar aproximadamente un minuto, pero esto no afecta el sitio público estático.

## Comandos

```bash
npm run dev              # desarrollo local
npm run seed             # carga los cinco proyectos y sus recursos
npm run generate:types   # regenera tipos de Payload
npm run lint             # validación estática
npx tsc --noEmit         # validación TypeScript
npm run build            # build de producción
```
