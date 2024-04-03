// Vite
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// Plugins
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
