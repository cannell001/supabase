// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Sets the server to run on port 3000
        open: true, // Automatically opens the browser when the server starts
    },
})
