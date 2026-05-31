## 2025-05-15 - [Vite Configuration Information Leakage]
**Vulnerability:** The `vite.config.ts` was using `loadEnv(mode, '.', '')` which loads all environment variables, including system-level ones, into the `env` object. Furthermore, it was explicitly injecting `GEMINI_API_KEY` into the client-side bundle using the `define` property, making it accessible via `process.env.GEMINI_API_KEY` in the browser.
**Learning:** Using an empty string as the third argument to `loadEnv` is dangerous as it doesn't filter by prefix. Directly injecting sensitive keys into the client bundle via `define` exposes them to anyone who can view the site.
**Prevention:** Always use the default `'VITE_'` prefix for `loadEnv` to ensure only intended variables are loaded. Avoid using `define` for sensitive secrets; instead, use backend proxies or prefixed environment variables if they are meant to be public.

**Note on Breaking Change:** Removing `GEMINI_API_KEY` from the client bundle disables any Gemini AI integration currently in the code. A secure backend proxy must be implemented to re-enable this functionality safely.
