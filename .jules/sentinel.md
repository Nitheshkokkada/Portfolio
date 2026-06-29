## 2025-05-22 - Insecure environment variable loading in Vite

**Vulnerability:** The `vite.config.ts` was using `loadEnv(mode, '.', '')` with an empty prefix, which according to Vite documentation, loads all system environment variables (e.g., PATH, HOME, etc.) into the configuration object. Furthermore, a sensitive secret `GEMINI_API_KEY` was being explicitly bundled into the client-side code via Vite's `define` configuration, despite not being used in the application source.

**Learning:** Vite's `loadEnv` function defaults to a 'VITE_' prefix for a reason. Using an empty string for the prefix is a high-risk pattern that can lead to accidental exposure of system-level secrets. Additionally, the `define` configuration in Vite performs literal string replacement at build time, meaning any secrets mapped there are permanently hardcoded into the production Javascript assets.

**Prevention:** Always use the default 'VITE_' prefix for environment variables intended for the frontend. Avoid using `loadEnv` with an empty prefix. Never use Vite's `define` or `import.meta.env` to expose sensitive API keys or secrets to the client-side bundle. If a secret is required for an API call, implement a backend proxy to protect the key.
