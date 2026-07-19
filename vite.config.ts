import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // ✅ SECURITY: Removed broad loadEnv call and process.env.GEMINI_API_KEY definition.
  // Vite's 'define' config performs literal string replacement at build time, hardcoding
  // secrets into production JS assets. Broad loadEnv calls load all system env variables,
  // risking information leakage. Since GEMINI_API_KEY is not used in src/, these were removed.
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
