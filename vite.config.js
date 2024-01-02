import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel(["resources/scripts/main.js", "resources/css/tailwind.css"]),
    ],
});
