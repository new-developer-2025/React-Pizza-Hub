import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// new
// import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig(
  {
    plugins: [react()],
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'https://react-fast-pizza-api.jonas.io',
    //       changeOrigin: true,
    //       secure: true,
    //     },
    //   },
  },
  // plugins: [
  //   react(),
  //   eslint({
  //     cache: false,
  //   }),
  // ],
);
