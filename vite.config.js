// Vite
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// Plugins
import jsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()]
})
