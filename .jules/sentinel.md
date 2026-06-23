## 2026-06-23 - Client-side Secret Exposure via Vite 'define'
**Vulnerability:** The `vite.config.ts` was configured to use `loadEnv(mode, '.', '')` with an empty prefix, which loads all environment variables (including sensitive system ones like `PATH`, `HOME`, etc.) into the build process. Furthermore, it explicitly used the `define` block to inject `process.env.GEMINI_API_KEY` into the client-side bundle.

**Learning:** Vite's `define` performs literal string replacement at build time. Any value mapped here is hardcoded into the production JavaScript assets, making secrets accessible to anyone via the browser's developer tools. Using `loadEnv` with an empty prefix is also highly dangerous as it bypasses the security-by-default `VITE_` prefix.

**Prevention:** Never use `define` to inject sensitive secrets into the client bundle. Use a backend proxy to interact with sensitive APIs. In `vite.config.ts`, avoid using `loadEnv` with an empty prefix; if environment variables are needed in the config itself, ensure only non-sensitive ones are accessed or use the default `VITE_` prefixing mechanism which Vite handles automatically for the client bundle.
