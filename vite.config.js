import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest:{
        name: "PWA - Task",
        short_name: "PWA",
        start_url: "./",
        display: "standalone",
        background_color: "#ffffff",
        description: "PWA",
        icons: [
          {
            src: "/img/vue-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/img/vue-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox:{
        runtimeCaching:[{
          urlPattern: ({url}) => {
            return url.pathname.startsWith('/')
          },
          handler: 'CacheFirst',
          options:{
            cacheName:"pwa",
            cacheableResponse:{
              statuses:[0,200]
            },
          }
        }]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
