import { fileURLToPath, URL } from "node:url"
import path from "path"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/svg/icons")],
      // Specify symbolId format
      symbolId: "svgIcon-[name]"
    })
  ],
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
