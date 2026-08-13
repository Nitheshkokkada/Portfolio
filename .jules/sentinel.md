# Sentinel Security Journal

## 2026-03-05 - Secret Exposure & Overly Permissive Environment Variable Loading in Vite
**Vulnerability:** Broad environment loading via `loadEnv` with an empty prefix combined with Vite's `define` mechanism can hardcode and expose highly sensitive environment variables (such as custom keys, system variables, or `GEMINI_API_KEY`) directly within production frontend JS bundles.
**Learning:** Vite's `define` performs static text replacement at build time. When using `loadEnv(mode, '.', '')`, Vite loads ALL environment variables (including system env variables) from the environment/dotenv, and mapping them using `define` embeds their values literally into the built client-side code, allowing anyone to inspect the source and extract the secrets.
**Prevention:** Avoid using `loadEnv` with empty prefix unless strictly necessary, and never map sensitive backend secrets into the frontend client build configuration via `define`. Rely on standard client-side environment variable prefixing (e.g. `VITE_`) and keep sensitive keys on the server side.
