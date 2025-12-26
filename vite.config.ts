
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // 关键：定义 process.env 防止浏览器端报错
    'process.env': {},
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || process.env.GEMINI_API_KEY),
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY)
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  base: '/', // 确保 Vercel 部署时的基础路径正确
});
