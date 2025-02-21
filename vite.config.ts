import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: ".",
  resolve: {
    alias:{
      src: path.resolve(__dirname, "./src"),
      Components: path.resolve(__dirname, './src/components'),
      Pages: path.resolve(__dirname, "./src/pages"),
      Assets: path.resolve(__dirname, "./src/assets"),
    }
  }
})
