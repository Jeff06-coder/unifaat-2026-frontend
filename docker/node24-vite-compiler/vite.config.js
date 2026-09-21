import { defineConfig } from 'vite'
import path from 'node:path'

// Vite.config dedicado ao container do compilador: aqui "resources" e
// "public" são pastas irmãs, direto em /app (ver Dockerfile ao lado),
// diferente do vite.config.js principal (usado no HMR local), onde tudo
// fica aninhado dentro de frontend/.
export default defineConfig({
    root: 'resources',
    resolve: {
        alias: {
            '@fa': path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')
        },
    },
    build: {
        outDir: '../public',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: [
                "./resources/index.html",
                "./resources/login.html",
                "./resources/tasks.html"
            ],
            output: {
                assetFileNames: 'src/[name].[hash][extname]',
                entryFileNames: 'src/[name].[hash].js',
                chunkFileNames: 'src/[name].[hash].js',
            }
        }
    }
})
