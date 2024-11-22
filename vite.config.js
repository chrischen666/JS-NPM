import { defineConfig } from 'vite'

export default defineConfig({
    base: '/JS-NPM/',  // 換成您的 repo 名稱
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                admin: 'admin.html'  // 加入第二個頁面
            }
        }
    }
})