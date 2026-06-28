# Sentinel Security Journal

## 2025-06-28 - Insecure Secret Injection via Vite Define
**Vulnerability:** Use of Vite's `define` property to inject `GEMINI_API_KEY` directly into the client-side bundle. Additionally, a broad `loadEnv` call without a prefix filter was used, which could leak other system environment variables.
**Learning:** Vite's `define` performs literal string replacement at build time, hardcoding the values into the production JS assets. This makes any secret injected this way publicly accessible in the browser.
**Prevention:** Never inject sensitive secrets into the client-side bundle. Use a backend proxy to interact with sensitive APIs, or use `VITE_` prefixed environment variables only for non-sensitive public configuration.
