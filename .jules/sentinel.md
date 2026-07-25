## 2026-04-08 - Secure Vite Configuration
**Vulnerability:** Insecure broad loadEnv use and API key injection via Vite's `define` mechanism.
**Learning:** Using `loadEnv(mode, '.', '')` with an empty prefix loads all system environment variables, including sensitive system paths and keys. Furthermore, mapping any env variable via Vite's `define` config literal replacement results in hardcoding those values into the final, public Javascript bundles.
**Prevention:** Avoid `loadEnv` with empty prefix unless strictly necessary, and never expose keys through `define` unless the feature explicitly requires public client-side access to that key. If a backend service or server-side functions are absent and the key is not in use, remove the insecure configuration.
