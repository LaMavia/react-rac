import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    minify: "esbuild",
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "Autocomplete",
      fileName: (format) => `Autocomplete.${format}.js`,
    },
  },
});
