## 2025-05-15 - Environment Variable Leakage via Vite Config
**Vulnerability:** Insecure use of `loadEnv(mode, '.', '')` and `define` in `vite.config.ts` was leaking all environment variables, including sensitive secrets like `GEMINI_API_KEY`, into the client-side bundle.
**Learning:** `loadEnv` with an empty prefix string (`''`) loads all environment variables, not just those prefixed with `VITE_`. Using `define` to inject these into the client bundle makes them accessible in the browser.
**Prevention:** Avoid using `loadEnv` with an empty prefix unless absolutely necessary, and never use `define` to inject sensitive secrets into the client-side bundle. Use a backend proxy for sensitive API calls.
