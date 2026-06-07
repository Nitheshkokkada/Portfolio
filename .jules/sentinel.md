## 2025-05-15 - [Critical] Secret Exposure in Vite Client Bundle
**Vulnerability:** Sensitive API keys (GEMINI_API_KEY) were being injected into the client-side JavaScript bundle using Vite's `define` configuration.
**Learning:** Using `loadEnv(mode, '.', '')` in `vite.config.ts` followed by a `define` block that maps a non-prefixed environment variable (like `GEMINI_API_KEY`) to `process.env` will bake that secret directly into the production build artifacts.
**Prevention:** Never use Vite's `define` or `VITE_` prefixed variables for sensitive secrets intended for backend use. Secrets should be handled on the server side, and the client should interact with them through a secure proxy if needed. Use `grep` on build artifacts to verify secrets are not present.
