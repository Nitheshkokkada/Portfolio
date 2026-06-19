## 2025-05-15 - Exposure of GEMINI_API_KEY via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration and `loadEnv` with an empty prefix.
**Learning:** Using `loadEnv(mode, '.', '')` without a prefix loads ALL environment variables, including sensitive ones, which were then explicitly bundled into the frontend via `define`.
**Prevention:** Never use Vite's `define` to expose sensitive secrets to the client. Use the default `VITE_` prefix for non-sensitive public config, and keep sensitive keys on the backend or in secure user-provided input.
