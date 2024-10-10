import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  build: {
    outDir: 'dist', // this is the default
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port:5173}
})
