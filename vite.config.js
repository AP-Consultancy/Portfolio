import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "logo-manifest",
      resolveId(id) {
        if (id === "virtual:logo-manifest") return "\0virtual:logo-manifest";
      },
      load(id) {
        if (id !== "\0virtual:logo-manifest") return;

        const logoDir = path.resolve(process.cwd(), "public", "logo");
        let files = [];
        try {
          files = fs.readdirSync(logoDir);
        } catch {
          files = [];
        }

        const urls = files
          .filter((file) => !file.startsWith("."))
          .filter((file) => /\.(png|jpe?g|svg|webp|avif|gif)$/i.test(file))
          .sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
          )
          .map((file) => `/logo/${encodeURIComponent(file)}`);

        return `export default ${JSON.stringify(urls)};`;
      },
      handleHotUpdate(ctx) {
        const logoDir = path.resolve(process.cwd(), "public", "logo");
        if (ctx.file.startsWith(logoDir)) {
          ctx.server.ws.send({ type: "full-reload" });
        }
      },
    },
  ],
});
