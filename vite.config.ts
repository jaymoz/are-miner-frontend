import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    https: {
      key: './cert/key.pem',
      cert: './cert/cert.pem',
    },
    proxy: {
      '/api': {
        target: 'https://52.91.210.118:443',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,  // For self-signed certificates
        ssl: {
          key: './cert/key.pem',
          cert: './cert/cert.pem',
        }
      }
    }
  }
})