import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from /<repo>/, local dev stays at /
  base: command === 'build' ? '/tegneserie-duellen/' : '/',
  plugins: [react(), tailwindcss()],
}))
