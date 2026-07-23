import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build use relative asset paths, so it works whether
// this is hosted at username.github.io/repo-name/ or a custom domain —
// no repo-name to hardcode, no "blank page" bug from wrong absolute paths.
export default defineConfig({
  plugins: [react()],
  base: './',
})
