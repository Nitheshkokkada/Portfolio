## 2026-06-11 - Preventing Secret Exposure in Vite Production Bundles
**Vulnerability:** The `vite.config.ts` was configured to use `loadEnv(mode, '.', '')`, which loads all environment variables (including system-level ones) and then explicitly injected `GEMINI_API_KEY` into the client-side bundle using the `define` property.

**Learning:** Using an empty string as the third argument to `loadEnv` is dangerous as it bypasses the default `VITE_` prefix protection, potentially loading sensitive system environment variables. Furthermore, the `define` property in Vite is a powerful but risky way to inject constants; if used for secrets, those secrets are hardcoded into the transpiled JavaScript and are easily discoverable.

**Prevention:**
1. Avoid using `loadEnv` with an empty prefix unless absolutely necessary and carefully audited.
2. Never use Vite's `define` to inject sensitive API keys or secrets into client-side code.
3. Use a backend proxy to handle requests that require sensitive API keys, keeping the keys on the server.
4. Stick to the `VITE_` prefix for public environment variables that are safe to expose.
