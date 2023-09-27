import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/es',
  },
  server: {
    port: 5173
  }
});
