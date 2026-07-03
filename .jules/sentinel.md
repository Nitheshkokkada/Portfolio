## 2025-05-15 - Secret Exposure via Vite 'define'
**Vulnerability:** Sensitive API keys (GEMINI_API_KEY) were being injected into the client-side bundle through Vite's `define` configuration and a broad `loadEnv` call.
**Learning:** Vite's `define` performs literal string replacement at build time, hardcoding secrets into production JS assets. Using `loadEnv(mode, '.', '')` without a prefix filter increases the risk of accidental exposure.
**Prevention:** Avoid injecting secrets into the client bundle. Use a backend proxy for sensitive API calls. Use the default `VITE_` prefix for non-sensitive public configuration.
