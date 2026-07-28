## 2026-03-01 - Prevent Secret Exposure and Broad Environment Variable Import via Vite Define
**Vulnerability:**
The `vite.config.ts` configuration file contained a broad environment loading call `loadEnv(mode, '.', '')` with an empty string prefix, which loaded all system environment variables (including sensitive ones like PATH, HOME, etc.) into memory. It then mapped `process.env.GEMINI_API_KEY` to `JSON.stringify(env.GEMINI_API_KEY)` using Vite's `define` configuration. This is highly dangerous as Vite's `define` performs literal string replacement at build time, hardcoding the raw secret into the client-side JavaScript production bundle, exposing it to anyone viewing the compiled source code.

**Learning:**
Any environment variables or constants mapped via Vite's `define` or standard environment injection are compiled directly into public frontend bundles. If the secret is not used on the frontend, it should never be mapped or compiled. Broad `loadEnv` with an empty prefix is also unsafe as it retrieves unnecessary host/environment details.

**Prevention:**
1. Never define, map, or reference backend-only credentials or API keys (e.g., `GEMINI_API_KEY`) in client configurations.
2. Only use the default `VITE_` prefix when loading environment variables on the frontend.
3. Avoid general-purpose define blocks in `vite.config.ts` unless they are for public environment flags or variables.
