## 2025-05-14 - Broad Environment Variable Exposure in Vite

**Vulnerability:** Loading all environment variables without a prefix using `loadEnv(mode, '.', '')` and explicitly defining unused secrets in `vite.config.ts`.

**Learning:** Using an empty string for the prefix in `loadEnv` causes Vite to load all system environment variables (e.g., PATH, HOME), which can be accidentally exposed. Furthermore, mapping secrets to `process.env` via the `define` configuration hardcodes them into the client-side bundle, even if they aren't used in the source code.

**Prevention:** Always use the default `VITE_` prefix for environment variables intended for the client. Remove any `define` mappings for sensitive keys that are not strictly required by the frontend, and ideally move secret-dependent logic to a secure backend.
