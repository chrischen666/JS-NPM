import { defineConfig } from 'vite'

export default defineConfig({
    base: '/JS-NPM/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                admin: 'admin.html'
            }
        }
    }
})