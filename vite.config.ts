import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Security Note: Broad environment variable loading (e.g., loadEnv with empty prefix)
  // is removed to avoid leaking system credentials or other sensitive env vars
  // into front-end assets. We also avoid mapping GEMINI_API_KEY directly via
  // Vite's 'define' property, as it would expose the secret in the client bundle.
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
