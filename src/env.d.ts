/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUBLIC_EMAIL_SERVICE_ID: string
  PUBLIC_EMAIL_TEMPLATE_ID: string
  PUBLIC_EMAIL_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}