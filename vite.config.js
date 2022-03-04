// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { laravel } from "vite-plugin-laravel";
var vite_config_default = defineConfig({
    plugins: [
        laravel({
            postcss: [tailwindcss(), autoprefixer()],
        }),
    ],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBsYXJhdmVsIGZyb20gJ3ZpdGUtcGx1Z2luLWxhcmF2ZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRsYXJhdmVsKHtcblx0XHRcdHBvc3Rjc3M6IFtcblx0XHRcdFx0dGFpbHdpbmRjc3MoKSxcblx0XHRcdFx0YXV0b3ByZWZpeGVyKCksXG5cdFx0XHRdLFxuXHRcdH0pLFxuXHRdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLFFBQVE7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
