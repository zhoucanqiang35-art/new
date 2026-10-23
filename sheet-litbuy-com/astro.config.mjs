import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sheet-litbuy.com',
  vite: { server: { allowedHosts: ['terminal.local'] } },
});
