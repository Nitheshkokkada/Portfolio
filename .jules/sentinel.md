## 2024-06-21 - Secret Exposure via Vite Define
**Vulnerability:** Use of Vite's `define` configuration to inject `GEMINI_API_KEY` directly into the client-side bundle.
**Learning:** Vite's `define` performs static replacement at build time, hardcoding any provided secrets into the production JavaScript assets. Furthermore, calling `loadEnv(mode, '.', '')` with an empty prefix loads all system environment variables (like `PATH` or `HOME`), risking accidental leakage if `define` is configured broadly.
**Prevention:** Never use `define` for sensitive secrets. Use a backend proxy for API calls that require authentication, or use the standard `VITE_` prefix for non-sensitive public configuration that is safe for client-side exposure.
