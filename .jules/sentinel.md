## 2026-06-26 - Insecure Vite Secret Injection
**Vulnerability:** Use of Vite's 'define' configuration to inject sensitive API keys (GEMINI_API_KEY) and broad 'loadEnv' call that exposed all system environment variables to the build context.
**Learning:** Vite's 'define' performs literal string replacement at build time, hardcoding values into the client-side bundle. Using loadEnv with an empty prefix ('') loads ALL environment variables, increasing the risk of accidental exposure.
**Prevention:** Avoid 'define' for secrets. Use VITE_ prefixed variables for public config and handle secrets exclusively on the backend. Always use specific prefixes with loadEnv.
