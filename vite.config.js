import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/cis-df-exam/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['sn-university-logo.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'CIS-DF Exam Simulator',
        short_name: 'CIS-DF Exam',
        description: 'ServiceNow CIS Discovery Fundamentals Practice Exam Simulator',
        theme_color: '#042D42',
        background_color: '#042D42',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'sn-university-logo.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
});
