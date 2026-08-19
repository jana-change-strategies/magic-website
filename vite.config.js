import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const root = fileURLToPath(new URL('.', import.meta.url))

// Multi-page app: one real HTML entry per route so each page ships
// its own <title>/meta/canonical/OG tags in the initial static HTML.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        wholesale: resolve(root, 'wholesale/index.html'),
        imprint: resolve(root, 'imprint/index.html'),
        privacy: resolve(root, 'privacy/index.html'),
      },
    },
  },
})
