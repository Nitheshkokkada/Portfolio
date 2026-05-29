## 2026-05-29 - [Secret Leak via Vite Define]
**Vulnerability:** Sensitive API keys (GEMINI_API_KEY) were being injected into the client-side bundle via Vite's `define` configuration.
**Learning:** Even if a secret is not explicitly used in the `src/` directory, Vite's `define` will make it available as a global replacement, which can lead to it being bundled if referenced or even just by existing in the configuration.
**Prevention:** Never use Vite's `define` to inject sensitive secrets. Use backend proxies or VITE_ prefixed environment variables only for non-sensitive public configuration.
