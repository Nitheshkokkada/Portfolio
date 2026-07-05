## 2025-05-15 - Secret Leakage via Build Config
**Vulnerability:** API keys and sensitive environment variables were being injected into the client bundle via Vite's `define` configuration.
**Learning:** Using `loadEnv(mode, '.', '')` without a prefix filter and mapping the result to `define` in Vite results in literal string replacement, embedding secrets into the production JavaScript assets. This happened even when the secrets were not explicitly used in the source code.
**Prevention:** Avoid broad `loadEnv` calls. Only use environment variables with the `VITE_` prefix for public configuration, and never use `define` to inject secrets into client-side code.
