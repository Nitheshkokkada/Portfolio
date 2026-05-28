## 2026-05-28 - Secret Injection via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` configuration.
**Learning:** Using `define` to inject environment variables into the frontend makes them part of the public JavaScript bundle, exposing sensitive secrets to any visitor.
**Prevention:** Avoid injecting server-side secrets into the client-side. Use backend proxies for sensitive API calls, or use `VITE_` prefixed variables only for non-sensitive public configuration.
