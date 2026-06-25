## 2026-06-25 - Prevent Secret Exposure in Vite Build
**Vulnerability:** API keys and sensitive environment variables were being bundled into client-side production assets via Vite's `define` configuration and a broad `loadEnv(mode, '.', '')` call.
**Learning:** Vite's `define` property performs literal string replacement at build time. Any value mapped here, such as `process.env.GEMINI_API_KEY`, becomes hardcoded in the generated JavaScript bundle, making it accessible to anyone who inspects the frontend code.
**Prevention:** Avoid using `define` for sensitive secrets. Use a backend proxy to interact with sensitive APIs. Additionally, do not use `loadEnv` with an empty prefix, as it loads all system environment variables into the config object, increasing the risk of accidental exposure.
