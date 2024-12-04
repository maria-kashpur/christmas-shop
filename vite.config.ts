import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue';
import pluginSvgVue from "@vuetter/vite-plugin-vue-svg";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), pluginSvgVue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern", "legacy"
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(
          new URL("./src/assets", import.meta.url)
        ),
      },
    ],
  },
});
