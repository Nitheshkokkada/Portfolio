## 2025-03-05 - Secret exposure via Vite build-time define
**Vulnerability:** The `vite.config.ts` was configured to use `loadEnv` with an empty prefix and a `define` block that mapped `process.env.GEMINI_API_KEY` to `env.GEMINI_API_KEY`.
**Learning:** Vite's `define` performs literal string replacement at build time. Mapping secrets here causes them to be hardcoded into the production Javascript assets, making them accessible to any user. Using `loadEnv` with an empty prefix is also dangerous as it pulls in all system environment variables.
**Prevention:** Avoid injecting sensitive secrets into the client bundle. Use a backend proxy for sensitive API calls. If configuration is needed on the frontend, use the default `VITE_` prefix which only exposes non-sensitive variables.
