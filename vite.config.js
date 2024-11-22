import { defineConfig } from 'vite';

export default defineConfig({
    base: '/JS-NPM/', // 部署路徑
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                admin: 'admin.html'
            },
            external: ['d3', 'c3'], // 防止重新打包這些模組
            output: {
                manualChunks: {
                    d3: ['d3'], // 分離 d3
                    c3: ['c3']  // 分離 c3
                }
            }
        }
    },
    optimizeDeps: {
        include: ['d3', 'c3'] // 加速開發環境
    }
});