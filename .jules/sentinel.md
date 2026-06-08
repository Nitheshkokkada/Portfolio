## 2025-05-15 - Leaking Secrets to Client Bundle via Vite Define

**Vulnerability:** Hardcoded secret injection and broad environment variable loading in `vite.config.ts`.
**Learning:** Using `loadEnv(mode, '.', '')` loads ALL environment variables, including sensitive system ones, and using `define` to map them makes them available in the client-side bundle, where they are easily discoverable.
**Prevention:** Avoid injecting sensitive secrets into the client bundle. Use the default `VITE_` prefix for non-sensitive public configuration, and use a backend proxy for operations requiring sensitive API keys. Narrow `loadEnv` usage or remove it if not needed in the config itself.
