import { defineConfig } from 'vite';

export default defineConfig({
  base: '/club-innovacion-sostenible/',
  esbuild: {
    jsx: 'automatic',
  },
  server: {
    port: parseInt(process.env.PORT || '5173'),
    host: '0.0.0.0',
    strictPort: false,
  },
});
