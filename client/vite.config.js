/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import alias from "alias-reuse";
import checkerPlugin from "vite-plugin-checker";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      checkerPlugin({
        typescript: true,
      }),
      viteStaticCopy({
        targets: [
          {
            src: "assets",
            dest: "",
          },
        ],
      }),
    ],
    root: "./src",
    build: {
      target: "esnext",
      outDir: "../dist",
      emptyOutDir: true,
      assetsDir: "",
    },
    server: {
      port: 9999,
    },
    define: {
      IS_DEV_MODE: JSON.stringify(command === "serve"),
      "process.env.DISCORD_WEBHOOK_URL": JSON.stringify(
        env.DISCORD_WEBHOOK_URL
      ),
      "process.env.COLYSEUS_ENDPOINT": JSON.stringify(env.COLYSEUS_ENDPOINT),
      "process.env.ALCHEMY_API_KEY": JSON.stringify(env.ALCHEMY_API_KEY),
      "process.env.ALCHEMY_POLYGON_API_KEY": JSON.stringify(env.ALCHEMY_POLYGON_API_KEY),
      "process.env.SCORE_RECORD_ENDPOINT": JSON.stringify(
        env.SCORE_RECORD_ENDPOINT
      ),
    },
    resolve: {
      alias: alias.fromFile(__dirname, "./tsconfig.json").toVite(),
    },
  };
});
