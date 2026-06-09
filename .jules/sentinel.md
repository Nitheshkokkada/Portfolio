## 2025-05-15 - Secret Exposure in Vite Config
**Vulnerability:** Environment variables were being bundled into the client-side code via Vite's `define` configuration.
**Learning:** Using `loadEnv(mode, '.', '')` loads all environment variables (not just those with `VITE_` prefix) and `define` explicitly injects them into the global scope of the browser bundle.
**Prevention:** Avoid injecting sensitive secrets into the client bundle. If a secret is needed for a backend-only process (like a build script or dev server), do not use `define`. For frontend use, use the `VITE_` prefix carefully.
