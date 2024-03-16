import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com', // La URL base a la que quieres redirigir
        changeOrigin: true, // Cambia el origen de la solicitud al `target`
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina el prefijo '/api' antes de hacer la solicitud
      },
    },
  },
});