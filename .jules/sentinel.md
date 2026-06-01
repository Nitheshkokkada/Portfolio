## 2025-05-14 - [Insecure API Key Exposure and Excessive Environment Loading]
**Vulnerability:** The `vite.config.ts` was using `loadEnv(mode, '.', '')` which loads ALL environment variables from the system, and then explicitly injected `GEMINI_API_KEY` into the client-side bundle via the `define` configuration.
**Learning:** Injected environment variables into the client bundle are visible to anyone who accesses the application. Even if the key is not currently used by the application code, it is still part of the generated JavaScript assets. Additionally, `loadEnv` with an empty prefix (`''`) is dangerous as it might pull in sensitive system environment variables not intended for the application.
**Prevention:**
1. Only use `VITE_` prefixed environment variables for values that are safe to expose to the client.
2. Avoid using `loadEnv` with an empty prefix unless absolutely necessary.
3. Never use Vite's `define` or `env` to inject sensitive secrets like API keys into the client-side code. Use a backend proxy for sensitive API calls.
