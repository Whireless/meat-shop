import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import vue from '@vitejs/plugin-vue';
// import path from 'path';

// const SRC_PATH = path.resolve(__dirname, 'src');
// const SVG_FOLDER_PATH = path.resolve(SRC_PATH, 'icons');

export default defineConfig({
  // base: '/stomatology', // Github
  server: {
    open: true,
  },
  build: {
    outDir: './build',
  },
  plugins: [
    vue(),
    ViteImageOptimizer({
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
    }),
    // createSvgSpritePlugin({
    //   svgFolder: SVG_FOLDER_PATH,
    //   transformIndexHtmlTag: {
    //     injectTo: 'body',
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
