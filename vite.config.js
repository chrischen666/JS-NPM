import { defineConfig } from 'vite';

export default defineConfig({
    base: '/JS-NPM/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                admin: 'admin.html'
            },
            output: {
                manualChunks: {
                    d3Chunk: ['d3'],
                    c3Chunk: ['c3']
                }
            }
        }
    },
    optimizeDeps: {
        include: ['d3', 'c3']
    }
});