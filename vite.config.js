import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173
  },
  // 👇 Esto es esencial para routing SPA como /login, /perfil, etc.
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
