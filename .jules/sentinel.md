# Sentinel Security Journal

## 2026-03-05 - Insecure Environment Variable Loading and Secret Exposure in Client Bundles

**Vulnerability:**
The build configuration in `vite.config.ts` was loading all system environment variables via `loadEnv(mode, '.', '')` (using an empty prefix) and defining them into client-side JS assets using Vite's `define` config (`process.env.GEMINI_API_KEY`). This allowed sensitive server/system environment variables (such as PATH, user info, cloud credentials, or private API keys) to be loaded into memory during compilation, and risked exposing private API keys (e.g., `GEMINI_API_KEY`) to the public client-side JavaScript bundle if referenced or bundled.

**Learning:**
Vite's `loadEnv` with an empty string as the third parameter loads all system environment variables without any filtering. Vite's `define` config performs direct string replacement during compilation, which hardcodes whatever is passed to it into the built frontend assets. Since the application is purely a client-side portfolio application and does not make secure backend-proxied API calls, exposing such configuration is both unnecessary and insecure.

**Prevention:**
1. Do not use `loadEnv(mode, '.', '')` with an empty prefix string; stick to Vite's default `VITE_` prefix prefix-filtering to prevent accidental loading of system-level environment variables.
2. Avoid using Vite's `define` config to inject sensitive private secrets (like API keys) into frontend code. Private keys should be kept on a secure backend proxy.
3. Clean up build configurations to keep them minimal and remove any unused definitions or environment loaders.
