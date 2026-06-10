## 2025-05-22 - Preventing Secret Exposure via Vite 'define'
**Vulnerability:** Use of Vite's 'define' configuration to inject sensitive environment variables (like GEMINI_API_KEY) directly into the client-side bundle.
**Learning:** This practice makes secrets accessible in the browser's global scope and hardcodes them into production assets, regardless of whether they are prefixed with 'VITE_'.
**Prevention:** Remove secret injection from 'vite.config.ts'. Use a backend proxy to handle sensitive API requests or only use non-sensitive configuration via 'VITE_' prefixed variables handled by Vite's default mechanism.
