# Sentinel Journal

## 2026-06-13 - Preventing Client-Side Secret Exposure via Vite Config
**Vulnerability:** Hardcoded or environment-based secrets (like GEMINI_API_KEY) were being injected into the client-side bundle using Vite's `define` configuration and a broad `loadEnv` call.
**Learning:** Using `loadEnv(mode, '.', '')` loads all environment variables, and `define` globally replaces their occurrences in the source code during build, making them visible in the production JavaScript artifacts.
**Prevention:** Avoid injecting sensitive secrets into the client bundle. Use a backend proxy for sensitive API calls or use the `VITE_` prefix for only non-sensitive public configuration that is safe for the client to see.
