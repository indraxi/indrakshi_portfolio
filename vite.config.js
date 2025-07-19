import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base path only when deploying
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/indrakshi_portfolio/' : '/',
})