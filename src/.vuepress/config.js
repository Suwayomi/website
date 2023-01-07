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
		nav: [
			{ text: "Guide", link: "/guide/" },
			{ text: "Discord", link: "https://discord.gg/DDZdqZWaHA" },
		],
		sidebar: ["", "/guide/"],
	},
	lastUpdated: "Last Updated",
};
