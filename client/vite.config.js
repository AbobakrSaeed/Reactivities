import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// use mkcert to generate a local SSL certificate
// This is useful for development environments that require HTTPS
//## npm install vite-plugin-mkcert --save-dev
import mkcert from "vite-plugin-mkcert";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@features": path.resolve(__dirname, "src/features"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
});
