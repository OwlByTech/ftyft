/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}