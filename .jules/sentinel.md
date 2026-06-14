## 2025-05-15 - [Exposing Environment Variables in Vite]
**Vulnerability:** The `vite.config.ts` was using `loadEnv` and `define` to inject `GEMINI_API_KEY` into the client-side bundle via `process.env.GEMINI_API_KEY`.
**Learning:** Even if a secret is not currently used in the source code, defining it in the build configuration makes it available in the global scope of the application and can lead to accidental exposure if any third-party library or future code logs `process.env` or if it's bundled into the final assets.
**Prevention:** Only use the `VITE_` prefix for environment variables that are intended to be public. Avoid using Vite's `define` for sensitive secrets. Use a backend proxy for API calls that require authentication.
