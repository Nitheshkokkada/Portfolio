## 2026-06-15 - [Secret Exposure via Vite Define]
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle through Vite's `define` configuration, exposing it to anyone viewing the application in a browser.
**Learning:** Using `loadEnv(mode, '.', '')` without a prefix loads ALL environment variables, and `define` can accidentally bundle sensitive keys if not carefully managed.
**Prevention:** Never use `define` to expose secrets. Use a backend proxy for sensitive API calls. If environment variables are needed on the client, use the default `VITE_` prefix which Vite uses to safely filter variables.
