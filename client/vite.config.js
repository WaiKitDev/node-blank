import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: {
      timeout: 10000,
      path: '@vite'
    },
  },
  build: {
    outDir: '../dist'
  },
  watch: {
    ignored: ["**/.npm/**", "**/node_modules/**"],
  },
})
