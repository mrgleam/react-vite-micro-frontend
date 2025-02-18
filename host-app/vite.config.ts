import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        todo_components: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});
