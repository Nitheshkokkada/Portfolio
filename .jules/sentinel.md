## 2025-05-22 - Preventing Secret Leakage in Vite
**Vulnerability:** Use of `loadEnv(mode, '.', '')` and `define` to inject all environment variables, including sensitive ones like `GEMINI_API_KEY`, into the client-side bundle.
**Learning:** Vite's `loadEnv` with an empty prefix loads all environment variables from the system and `.env` files. Using `define` to map these to `process.env` in the client bundle exposes them to any user inspecting the site.
**Prevention:** Only use the `VITE_` prefix for variables intended for the client. Avoid using `loadEnv` with an empty prefix in `vite.config.ts` if possible, and never `define` sensitive keys into the global scope.
