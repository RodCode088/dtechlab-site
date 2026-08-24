import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { es } from '@payloadcms/translations/languages/es'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
const publicSiteURL = process.env.PUBLIC_SITE_URL || 'https://www.dtechl.com'
const usePostgres = process.env.PAYLOAD_DB_MODE === 'postgres'
const hasS3Storage = Boolean(
  process.env.S3_BUCKET &&
  process.env.S3_ACCESS_KEY_ID &&
  process.env.S3_SECRET_ACCESS_KEY &&
  process.env.S3_ENDPOINT,
)

export default buildConfig({
  serverURL,
  i18n: {
    fallbackLanguage: 'es',
    supportedLanguages: { es },
  },
  cors: [publicSiteURL, serverURL],
  csrf: [publicSiteURL, serverURL],
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' · DTechLab CMS',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Projects],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: usePostgres
    ? postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URL || '',
        },
      })
    : sqliteAdapter({
        client: {
          url: process.env.SQLITE_URL || 'file:./dtechlab-cms.db',
        },
      }),
  sharp,
  plugins: hasS3Storage
    ? [
        s3Storage({
          bucket: process.env.S3_BUCKET!,
          collections: {
            media: {
              prefix: 'dtechlab',
            },
          },
          config: {
            endpoint: process.env.S3_ENDPOINT,
            forcePathStyle: true,
            region: process.env.S3_REGION || 'us-east-1',
            credentials: {
              accessKeyId: process.env.S3_ACCESS_KEY_ID!,
              secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
            },
          },
        }),
      ]
    : [],
})
