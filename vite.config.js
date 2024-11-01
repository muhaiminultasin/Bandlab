import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Set root to the project directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './main.html', // Explicitly set the entry point
    },
  },
})