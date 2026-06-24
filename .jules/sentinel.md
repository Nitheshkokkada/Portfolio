## 2025-05-22 - Secret Exposure via Vite 'define'
**Vulnerability:** Environment variables (like GEMINI_API_KEY) were being injected into the client-side bundle using Vite's `define` configuration and an insecure `loadEnv` call with an empty prefix.
**Learning:** Vite's `define` performs literal string replacement at build time. Mapping secrets here hardcodes them into production JS assets. Using `loadEnv` with an empty prefix also risks loading all system environment variables (like PATH or HOME) into the build process.
**Prevention:** Avoid using `define` for sensitive keys. Use the default 'VITE_' prefix for non-sensitive public config, and handle sensitive operations on a secure backend. Never use `loadEnv` with an empty prefix unless absolutely necessary and safe.
