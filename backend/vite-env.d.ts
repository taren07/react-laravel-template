interface ImportMetaEnv {
    readonly PROD: boolean
    readonly BASE_URL: string
    readonly VITE_API_VERSION: string
    readonly VITE_GOOGLE_CLIENT_ID: string
    readonly VITE_APP_ENV: string
    readonly VITE_APP_URL: string
    // その他の環境変数...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
