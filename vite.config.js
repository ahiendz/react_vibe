import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// 👇 THÊM base: '/<repo-name>/' VÀO ĐÂY
export default defineConfig({
  plugins: [react()],
  base: '/react_vibe/', // ⚠️ THAY 'react_vibe' = TÊN REPO TRÊN GITHUB CỦA M
})
