import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = '/Portfolio'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : `${repoName}/`,
  plugins: [react()],
}))
