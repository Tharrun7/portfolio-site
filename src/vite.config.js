import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-site/', 
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '*'],
    host: true,
  }
})
