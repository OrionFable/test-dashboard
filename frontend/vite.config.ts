import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue(), tailwindcss()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL, // Use the loaded environment variable
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  };
});
