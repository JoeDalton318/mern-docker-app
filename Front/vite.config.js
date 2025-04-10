import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path'; // Utilisation du préfixe node: pour les modules natifs

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/Pages')
    }
  },
  server: {
    port: 3000,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});