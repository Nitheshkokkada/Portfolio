import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // SECURE CONFIGURATION:
  // 1. Avoid using `loadEnv(mode, '.', '')` as loading all env vars can leak system/environment keys.
  // 2. Avoid using `define` to inject process.env.GEMINI_API_KEY directly into the client bundle
  //    since Vite literal replacements hardcode secrets into public Javascript assets.
  //    Vite naturally loads only environment variables starting with 'VITE_' into import.meta.env.
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
