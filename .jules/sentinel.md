## 2026-07-12 - Secret Leakage via Vite Build Configuration
**Vulnerability:** The application was configured to inject the `GEMINI_API_KEY` into the client-side bundle via Vite's `define` property. Additionally, `loadEnv` was called with an empty prefix, loading all system environment variables into the build context.
**Learning:** Even if a secret is not explicitly used in the `src/` directory, Vite's `define` configuration will perform a literal replacement during the build, effectively hardcoding the secret into the production JavaScript assets.
**Prevention:** Never use `define` to map sensitive environment variables to the frontend. Ensure `loadEnv` is used with the default 'VITE_' prefix to only load intended public variables.
