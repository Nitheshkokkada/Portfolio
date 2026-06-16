# Sentinel Journal 🛡️

## 2026-06-16 - Prevent Secret Exposure via Vite 'define'
**Vulnerability:** Use of `loadEnv(mode, '.', '')` combined with `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }` in `vite.config.ts`.
**Learning:** This configuration loads ALL environment variables (including system-level ones) and explicitly injects a specific secret into the client-side bundle if it's ever referenced in the source code. Even if not currently used, it's a "loaded gun" for future developers.
**Prevention:** Avoid using `define` to inject sensitive secrets into the frontend. Use the default `VITE_` prefix for non-sensitive public configuration, and keep sensitive keys on the backend or use a proxy.
