// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XR Labs',
  tagline: 'Building the future of reality @ UC Davis',
  url: 'https://quadcopter-ar.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'quadcopter-ar', // Usually your GitHub org/user name.
  projectName: 'QuadcopterAR-Documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/quadcopter-ar/QuadcopterAR-Documentation/tree/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/quadcopter-ar/QuadcopterAR-Documentation/tree/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Xtended Reality Labs',
        logo: {
          alt: 'Xtended Reality Labs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/welcome',
            position: 'left',
            label: 'Getting Started',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/quadcopter-ar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/welcome',
              },
            ],
          },
          {
            title: 'Get In touch',
            items: [
              {
                label: 'Email',
                href: 'mailto:max@cs.ucdaivs.edu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/quadcopter-ar/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xtended Reality Labs. Built with ❤️  at UC Davis.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
