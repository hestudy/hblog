import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  markdown: {
    remarkPlugins: [
      () => {
        return (tree, file) => {
          file.data.astro.frontmatter.author = "HeStudy";
        };
      },
    ],
  },
  server: {
    port: 5000,
  },
});
