import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Load mode-specific .env files (e.g. .env.development, .env.production)
  envDir: path.resolve(__dirname),
  envPrefix: 'VITE_',

  server: {
    host: '::',
    port: 3000,
  },

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  define: {
    // Provide a fallback for VITE_BASE_URL if not set
    'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_BASE_URL || 'https://wardrobe-system-backend.onrender.com'),
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    css: true,
  },
}));
