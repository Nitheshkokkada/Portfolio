## 2025-05-14 - Insecure Secret Injection via Vite Define
**Vulnerability:** Hardcoded or environment-sourced secrets injected into the client bundle via Vite's `define` configuration.
**Learning:** Using `loadEnv` with an empty prefix loads ALL environment variables, including sensitive system ones. Injected secrets via `define` are statically replaced in the bundle and easily discoverable.
**Prevention:** Avoid injecting secrets into frontend bundles. Use a backend proxy for sensitive API calls or only expose non-sensitive public configuration using the `VITE_` prefix.
