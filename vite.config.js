import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/chatarra-rock/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  server: {
    historyApiFallback: true,
  }
});
