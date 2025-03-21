import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/weather-forecast/",  // Важливо для правильного посилання на файли

  server: {
    proxy: {
      "/weatherapi": {
        target: "https://api.weatherapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weatherapi/, ""),
      },
    },
  },
});
