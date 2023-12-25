// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Etcetera Finances Docs",
  tagline: "Manage your finances with ease",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  organizationName: "etchichury",
  projectName: "etcetera-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Etcetera Finances",
        logo: {
          alt: "Etcetera Finances logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/etchichury",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs",
              },
              {
                label: "About the frontend",
                to: "/docs/frontend/overview",
              },
              {
                label: "About the backend",
                to: "/docs/backend/overview",
              },
            ],
          },
          {
            title: "Repositories",
            items: [
              {
                label: "Etcetera Frontend",
                href: "https://github.com/etchichury/etcetera-frontend",
              },
              {
                label: "Etcetera Backend",
                href: "https://github.com/etchichury/etcetera-backend",
              },
              {
                label: "Etcetera Docs",
                href: "https://github.com/etchichury/etcetera-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} João Etchichury. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
