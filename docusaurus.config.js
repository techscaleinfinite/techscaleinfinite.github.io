// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {
  themes as prismThemes
} from 'prism-react-renderer';
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
 title: 'ScaleInfinite | AI Managed, Self-Driving Cloud Applications with Kubernets and Docker Services',
  tagline: 'AI-Managed Solutions for Automated Application Performance',
  url: 'https://techscaleinfinite.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',


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
    [
      path.resolve(__dirname, "plugin-dynamic-routes"),
      {
        routes: [
          {
            path: "/example",
            exact: false,
            component: "@site/src/components/ExampleRouter"
          }
        ]
      }
    ],
  function webpackFallbackPlugin() {
    return {
      name: 'webpack-fallback-plugin',
      configureWebpack() {
        return {
          resolve: {
            fallback: {
              fs: false,
              path: false,
              crypto: false,
            },
          },
        };
      },
    };
  },
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/picture-removebg-preview.png',
      
        metadata: [
      { name: 'keywords', content: 'scaleinfinite, devops, kubernetes, cloud deployment' },
      { name: 'description', content: 'ScaleInfinite helps you deploy and manage applications seamlessly with cloud-native tools.' },
      { name: 'author', content: 'ScaleInfinite Technologies' },
      {
       name: 'google-site-verification',
        content: 'oa5QCCKVNejAXvsZQ7w7l0K9wRbfjGaHLikdK9gtLOk',
      },
      {
        name: 'canonical',
        content: 'https://docs.scaleinfinite.fr/',
    },
    ],

      navbar: {
        logo: {
          alt: 'Scale Infinite',
          src: 'img/logo.svg',
          srcDark: "img/dark-logo.svg",
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
            to:'/quick-start'
          },
          {     
            position: 'left',
            label: 'Playstore',
            to:'/playstore'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
           // Custom Google Sign-in button as raw HTML
    {
      type: 'html',
      position: 'right',
      value: `
        <li style="list-style: none; border: 1px solid #d1cdcd; width: 220px; border-radius: 30px;">
          <a href="https://cloud.scaleinfinite.fr/index.php/apps/sociallogin/oauth/google" target="_blank"
             style="padding: 0.5rem 1rem; display: flex; align-items: center; width: 220px; text-decoration: none; font-size: 15px;color: var(--ifm-color-primary-title-dark);">
            <img src="/images/g.png" alt="Sign in with Google"
                 style="margin-right: 8px; width: 30px; height: 30px;   " />
            Sign in with Google
          </a>
        </li>
      `,
    },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'right',
          //   label: 'Cloud Float',
          // },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'right',
          //   label: 'Sign up',
          // },
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

    }),
};

export default config;
