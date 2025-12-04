import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { type AliasOptions, defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        } as AliasOptions,
    },
})
