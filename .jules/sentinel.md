## 2026-03-01 - Insecure Environment Configuration and Secret Exposure via Vite Define
**Vulnerability:**
The `vite.config.ts` was using `loadEnv` with an empty prefix parameter `loadEnv(mode, '.', '')`, causing all system/process environment variables to be broad-loaded into the configuration context. Furthermore, Vite's `define` configuration was set to perform literal replacement of `process.env.GEMINI_API_KEY` in the compiled client-side code, which would bundle secrets directly into production Javascript assets, risking public disclosure.

**Learning:**
Vite's `define` mechanism conducts literal string replacement at build-time. Hardcoding API keys like `GEMINI_API_KEY` into `define` compiles the active environment key directly into public client bundle files. Furthermore, passing an empty prefix string `''` to `loadEnv` overrides the default `VITE_` safety prefix, loading sensitive system-level env variables.

**Prevention:**
Always avoid broad-loading environment variables in `vite.config.ts`. If frontend components require environment values, prefix them with `VITE_` to let Vite securely handle selective public exposure. Avoid defining API keys or private secrets in the client-side `define` block; instead, delegate sensitive third-party API interaction to a secure backend or proxy server.
