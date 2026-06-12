## 2025-05-15 - Secret Leakage via Vite Define

**Vulnerability:** Sensitive API keys (GEMINI_API_KEY) were being injected into the client-side bundle via Vite's `define` configuration. Additionally, `loadEnv(mode, '.', '')` was used, which loads ALL environment variables from the system into the config, increasing the risk of accidental exposure.

**Learning:** Vite's `define` block literally replaces occurrences of the defined string in the source code with the value provided. If this is done with secrets, they become part of the public JavaScript bundle. Using an empty string for the third argument in `loadEnv` is dangerous as it bypasses the default `VITE_` prefix filter.

**Prevention:** Never use Vite's `define` to inject secrets into client-side code. Use a backend proxy for sensitive API calls. Always use the default `VITE_` prefix for environment variables intended for the client, and avoid broad `loadEnv` calls that pull in non-prefixed system variables.
