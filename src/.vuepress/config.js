const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'The ranter',
	dest: './public',
	themeConfig: {
		repo: 'https://github.com/shayshimon/vuepress-blog-boilerplate',
		repoLabel: 'GitHub',
		nav: [
			{ text: 'Home', link: '/' }, 
			{ text: 'Blog', link: '/blog/' },
			{ text: 'Archive', link: '/archive/' },
			{ text: 'RSS Feed', link: '/rss.xml' },
			{ text: 'About', link: '/about/'}
		],
		logo: '/vuepress-blog-logo.png',
		docsDir: 'src',
		pageSize: 5,
		startPage: 0
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor',
		[
		    '@vssue/vuepress-plugin-vssue', {
		      // set `platform` rather than `api`
		      platform: 'github',

		      // all other options of Vssue are allowed
		      owner: 'shayshimon',
		      repo: 'vuepress-blog-boilerplate',
		      clientId: 'd7fe37ea7acce65f9a0a',
		      clientSecret: 'de2232a7fa081e16531d10d959d6afe2c7c914d7',
		    }
		],
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
