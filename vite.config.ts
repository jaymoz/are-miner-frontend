import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    proxy:{
      '/api': {
        // target: 'http://127.0.0.1:8100',
        target: 'http://50.16.24.62:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

// http://50.16.24.62:80/extract_requirements
