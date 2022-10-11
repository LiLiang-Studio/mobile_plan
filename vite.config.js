import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const base = '/mobile_plan'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  define: {
    'process.env.base': JSON.stringify(base)
  },
  plugins: [vue()]
})
