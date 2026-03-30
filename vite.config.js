import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/system': 'http://localhost:3001' // redirige peticiones a Ignition
    }
  }
})
