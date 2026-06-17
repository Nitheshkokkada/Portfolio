## 2025-05-14 - [Vite Environment Variable Leakage]
**Vulnerability:** The `vite.config.ts` was using `loadEnv(mode, '.', '')` which loads ALL environment variables (including system-level ones) into the config object. Additionally, it was using the `define` block to inject `process.env.GEMINI_API_KEY` into the client-side bundle.
**Learning:** Broadly loading environment variables in Vite and manually defining them for the client can easily lead to accidental leakage of sensitive secrets like API keys into the production build.
**Prevention:** Avoid using `loadEnv` with an empty prefix unless absolutely necessary for specific server-side build logic. Rely on Vite's default `VITE_` prefix for client-exposed variables, and never inject sensitive secrets into the client bundle via `define`.
