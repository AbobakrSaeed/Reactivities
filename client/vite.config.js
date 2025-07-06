import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// use mkcert to generate a local SSL certificate
// This is useful for development environments that require HTTPS
//## npm install vite-plugin-mkcert --save-dev
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
});
