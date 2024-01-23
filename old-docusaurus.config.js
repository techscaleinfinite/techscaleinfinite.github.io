// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scale Infinite',
  tagline: 'cloud',
  // favicon: 'img/u78.png', - (Title Favicon should come)

  // Set the production url of your site here
  url: 'https://techscaleinfinite.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'techscaleinfinite', // Usually your GitHub org/user name.
  projectName: 'techscaleinfinite.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        //blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
         //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
       // },
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom', // can also just be 'image-zoom'
    // ...other plugins
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://techscaleinfinite.github.io/introduction/cloud-float/billing-and-usage',
            label: 'Pricing',
            position: 'left',
          },
          {
            href: 'https://scaleinfinite.fr/',
            label: 'Cloud FLoat',
            position: 'right',
          },
          {
            href: 'https://techscaleinfinite.github.io/blogs/Blogging',
            label: 'Blog Hub',
            position: 'left',
          },
          {
            href: 'https://scaleinfinite.fr/',
            label: 'Sign In',
            position: 'left',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [                                               
                                                                                                                                                              
   
   
   
      
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
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
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          // for example:
          // margin: 16,
        },
      },
    }),
};



export default config;