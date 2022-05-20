/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_PROJECT: string
}
// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
