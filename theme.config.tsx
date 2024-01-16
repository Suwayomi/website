import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Suwayomi</span>,
  project: {
    link: 'https://github.com/Suwayomi',
  },
  chat: {
    link: 'https://discord.gg/DDZdqZWaHA',
  },
  docsRepositoryBase: 'https://github.com/Suwayomi/website',
  footer: {
    text: <span>Built with ❤️ using <a href="https://nextra.site">Nextra</a>, MPL-2.0 Licensed - Copyright (C) Contributors to the Suwayomi project</span>,
  },

  useNextSeoProps: () => ({
    titleTemplate: '%s – Suwayomi Offical Website'
  })
};

export default config;