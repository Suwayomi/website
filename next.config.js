const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});
  
module.exports = withNextra({
    // next config
    output: 'export',
    images: {
        unoptimized: true,
    },
});