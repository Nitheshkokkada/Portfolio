## 2026-07-04 - Insecure Environment Variable Exposure in Vite
**Vulnerability:** The Vite configuration used `loadEnv(mode, '.', '')` to broadly load all environment variables, including sensitive system variables, and explicitly exposed `GEMINI_API_KEY` to the client via the `define` block.
**Learning:** Using an empty prefix with `loadEnv` is dangerous as it bypasses the default safety mechanism of only loading `VITE_` prefixed variables. Explicitly mapping secrets in `define` bakes them into the production JavaScript bundle.
**Prevention:** Avoid using empty prefixes in `loadEnv`. Do not use `define` to pass secrets to the client; instead, use a backend proxy for sensitive API calls or ensure secrets are only used in server-side environments.
