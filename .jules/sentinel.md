## 2025-05-22 - Insecure API Key Injection in Vite Configuration
**Vulnerability:** The `vite.config.ts` was using the `define` property to inject `process.env.GEMINI_API_KEY` into the client-side bundle.
**Learning:** Using `define` in Vite for global replacement makes the value available in the compiled frontend code, which can be easily inspected by anyone. This is especially dangerous for sensitive secrets like API keys.
**Prevention:** Avoid injecting sensitive environment variables into the frontend. Use a backend proxy or serverless functions to handle requests that require secret API keys.
