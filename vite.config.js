import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Cấu hình base '/' để deploy trên Vercel (Root Domain)
export default defineConfig({
  plugins: [react()],
  base: '/',
})

