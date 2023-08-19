import { defineConfig } from 'vite';

export default defineConfig({
    // Entry points for your app
    build: {
        rollupOptions: {
            input: {
                main: './main.js', // Entry point for your vanilla JavaScript
            },
        },
    },
    plugins: [],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/main.scss";`, // Import your SCSS file
            },
        },
    },
});