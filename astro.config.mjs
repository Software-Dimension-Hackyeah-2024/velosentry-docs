// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  base: '/velosentry-docs',
  integrations: [
    starlight({
      title: 'VeloSentry',
      logo: {
        light: '/public/horizontal-logo-light.svg',
        dark: '/public/horizontal-logo-dark.svg',
        alt: 'VeloSentry Logo',
        replacesTitle: true,
      },
      social: {
        github:
          'https://github.com/Software-Dimension-Hackyeah-2024/velosentry',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
