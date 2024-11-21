import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html', // 新增其他頁面的 HTML 文件
            },
        },
    },
    base: '/JS-NPM/'
});