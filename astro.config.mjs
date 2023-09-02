import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import purgecss from "astro-purgecss";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: '_assets'
  },
  experimental: {
    optimizeHoistedScript: true,
  },
  image: {
    service: sharpImageService(),
    domains: ["astro.build"]
  },
  compressHTML: true,
  integrations: [tailwind(), compressor({
    gzip: true,
    brotli: false
}),]
});