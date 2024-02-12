import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'buildaplatform',
  tagline: 'Build cloud native platforms',
  favicon: 'img/favicon.ico',
  url: 'https://buildaplatform.io',
  baseUrl: '/',
  organizationName: 'buildaplatform',
  projectName: 'buildaplatform.github.io',
  onBrokenLinks: 'throw',
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
      {
        docs: {
          sidebarPath: 'sidebars.json',
          editUrl:
            'https://github.com/buildaplatform/buildaplatform.github.io/edit/main/docs',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'buildaplatform',
      items: [
        {
          href: 'https://github.com/buildaplatform',
          label: 'GitHub',
          position: 'left',
        },
        {
          to: 'docs/overview/what-is-buildaplatform',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'What is buildaplatform?',
              to: '/docs/overview/what-is-buildaplatform',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/buildaplatform',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} buildaplatform, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
