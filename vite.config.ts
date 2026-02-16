import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Copy index.html to 404.html so GitHub Pages / static hosts serve SPA on reload
    {
      name: "copy-404",
      closeBundle() {
        const out = path.resolve(__dirname, "dist");
        const index = path.join(out, "index.html");
        const fallback = path.join(out, "404.html");
        if (fs.existsSync(index)) {
          fs.copyFileSync(index, fallback);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
