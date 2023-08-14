import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";
import path from "path";

const ENV_MODE = process.env.NODE_ENV;
enum ENV {
  development = "development",
  production = "production",
}
const isDev = ENV_MODE === ENV.development;

export default defineConfig({
  root: isDev ? "" : "./src/entry/",
  publicDir: path.resolve(__dirname, "./public"),
  plugins: [react(), zipPack()],
  server: {
    port: 3000, // 设置开发服务器的端口
  },
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    assetsDir: "static",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, "./src/entry/popup/index.html"),
        options: path.resolve(__dirname, "./src/entry/options/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": "src",
    },
  },
});
