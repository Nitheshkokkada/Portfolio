## 2026-06-04 - [Initial Scan]
**Vulnerability:** Over-permissive environment variable loading and secret exposure in Vite config.
**Learning:** Using `loadEnv(mode, '.', '')` in Vite loads all system environment variables into the config object. Combined with `define`, this can accidentally expose sensitive system-level secrets to the client-side bundle.
**Prevention:** Avoid using an empty string as the prefix in `loadEnv`. Only expose necessary, non-sensitive configuration to the client using the `VITE_` prefix.
