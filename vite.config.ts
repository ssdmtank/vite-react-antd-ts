import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd-mobile",
          libDirectory: "es",
          style(name) {
            return `antd-mobile/lib/${name}/style/index.css`;
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@/": path.resolve(__dirname, "./src"),
    },
  },
});
