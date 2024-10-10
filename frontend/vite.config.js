import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
  build: {
    outDir: 'dist' // this is the default, but can be customized
  }
})

