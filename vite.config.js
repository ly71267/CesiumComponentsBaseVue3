import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import { viteStaticCopy } from 'vite-plugin-static-copy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import cesium from 'vite-plugin-cesium'

// const cesiumSource = "node_modules/cesium/Biuld/Cesium"
// const cesiumBaseUrl = "cesiumStatic"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss(), cesium()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
