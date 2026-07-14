import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/asset-proxy': {
        target: 'https://en.dinotaeng.com',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/asset-proxy/, ''),
      },
      '/cafe24-proxy': {
        target: 'https://cafe24img.poxo.com',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/cafe24-proxy/, ''),
      },
    },
  },
});
