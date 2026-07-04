import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://qingruiwang.github.io",
  base: "/qingrui.wang.github.io",
  output: "static",
  integrations: [sitemap()],
});
