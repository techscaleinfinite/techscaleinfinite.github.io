// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {
  themes as prismThemes
} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scale Infinite',
  tagline: 'cloud',

  // Set the production url of your site here
  url: 'https://techscaleinfinite.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'techscaleinfinite', // Usually your GitHub org/user name.
  projectName: 'techscaleinfinite.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          breadcrumbs: false,
          sidebarCollapsed: false,
          lastVersion: 'current',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/picture-removebg-preview.png',

      navbar: {
        logo: {
          alt: 'Scale Infinite',
          src: 'img/logo.svg',
          srcDark: "img/dark-logo.svg",
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Pricing',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Cloud Float',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Sign up',
          },
        ],
      },

      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} ScaleInfinite`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {
          // Example: margin: 16,
        },
      },

      // ✅ Structured Data Injection
      headTags: [
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Scaleinfinite Technologies",
            "url": "https://docs.scaleinfinite.fr",
            "logo": "https://docs.scaleinfinite.fr/img/logo.svg"
          }),
        },
      ],
    }),
};

export default config;
