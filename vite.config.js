import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-11/',
  // SimpleLightbox 2.x uses the Node-style global identifier in its bundle.
  define: { global: 'globalThis' },
});
