// Vite
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// NodeJS
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
