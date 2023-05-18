const sideBar = {
	default: [
		{
			title: "Frequently Asked Questions",
			path: "/help/faq/",
		},
		{
			title: "Guides",
			collapsable: false,
			sidebarDepth: 2,
			children: [
				"/help/guides/getting-started",
				"/help/guides/troubleshooting",
				// "/help/guides/backups",
				// "/help/guides/categories",
				"/help/guides/local-manga",
			],
		},
		// {
		// 	title: "Tachidesk",
		// 	collapsable: false,
		// 	sidebarDepth: 2,
		// 	children: ["/help/contribution", "/download/", "/extensions/", "/forks/"],
		// },
	],
};

module.exports = {
	title: "Suwayomi - Tachidesk",
	description: "A free and open source manga reader server that runs extensions built for Tachiyomi.",
	dest: "./public",
	// head: [
	//   ['meta', { name: 'theme-color', content: '#3eaf7c' }],
	//   ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
	//   ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	// ],
	themeConfig: {
		repo: "Suwayomi/Tachidesk-Server",
		docsRepo: "Suwayomi/website",
		docsDir: "src",
		editLinks: true,
		editLinkText: "",
		lastUpdated: "Last Updated",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Help Center", link: "/help/" },
			{ text: "Download", link: "/download/" },
			{ text: "Discord", link: "https://discord.gg/DDZdqZWaHA" },
		],
		sidebar: {
			"/help/guides/": sideBar.default,
			"/help/faq/": sideBar.default,
		},
	},
  plugins: [
    ["vuepress-plugin-element-ui"],
    [
      "vuepress-plugin-container",
      {
        type: "c-tip",
        before: (info) => `<div class="custom-block c-tip"><h4 class="c-title">${info}</h4>`,
        after: "</div>",
        defaultTitle: "",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "c-warning",
        before: (info) => `<div class="custom-block c-warning"><h4 class="c-title">${info}</h4>`,
        after: "</div>",
        defaultTitle: "",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "c-danger",
        before: (info) => `<div class="custom-block c-danger"><h4 class="c-title">${info}</h4>`,
        after: "</div>",
        defaultTitle: "",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "expander",
        before: (info) => `<details class="expander"><summary class="expansion">${info}</summary>`,
        after: "</details>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "guide",
        before: (info) => `<div class="guide"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "videolink",
        before: "<div class='videolink'>",
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "guide-empty",
        before: "<div class='guide g-empty'>",
        after: "</div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "note",
        before: "<div class='note'><p>",
        after: "</div></p>",
      },
    ],
  ]
};
