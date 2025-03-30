import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdon',
    setupFiles: './src/setupTests.js',
    exclude: [...configDefaults.exclude, 'e2e/*'],
  }
})
