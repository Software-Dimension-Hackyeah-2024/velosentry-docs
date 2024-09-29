// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://software-dimension-hackyeah-2024.github.io/velosentry-docs",
  base: "/velosentry-docs",
  integrations: [
    starlight({
      title: "VeloSentry",
      customCss: ["./src/styles/custom.css"],
      logo: {
        light: "/public/horizontal-logo-light.svg",
        dark: "/public/horizontal-logo-dark.svg",
        alt: "VeloSentry Logo",
        replacesTitle: true,
      },
      social: {
        github:
          "https://github.com/Software-Dimension-Hackyeah-2024/velosentry",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "guides/getting-started" },
            { label: "Route API", slug: "guides/route-api" },
            { label: "Accidents API", slug: "guides/accidents-api" },
            { label: "Cluster API", slug: "guides/cluster-api" },
            {
              label: "(Work in progress) Weather API",
              slug: "guides/weather-api",
            },
          ],
        },
      ],
    }),
  ],
});
