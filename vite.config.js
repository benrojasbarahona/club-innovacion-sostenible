import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  server: {
    port: parseInt(process.env.PORT || '5173'),
    host: '0.0.0.0',
    strictPort: false,
  },
});
