const siteMetadata = {
	title: 'Next.js E-Commerce Template',
	author: 'James Erringham-Bruce',
	headerTitle: 'NextCommmerce',
	description: 'An e-commerce template created with Next.js and Tailwind.css',
	language: 'en-uk',
	theme: 'system',
	siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
	siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
	siteLogo: '/static/images/logo.png',
	image: '/static/images/avatar.png',
	socialBanner: '/static/images/twitter-card.png',
	email: 'address@yoursite.com',
	github: 'https://github.com',
	twitter: 'https://twitter.com/Twitter',
	facebook: 'https://facebook.com',
	youtube: 'https://youtube.com',
	linkedin: 'https://www.linkedin.com',
	locale: 'en-US',
	analytics: {
		plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
		simpleAnalytics: false, // true or false
		umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
		googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
		posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
	},
	newsletter: {
		// supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
		// Please add your .env file and modify it according to your selection
		provider: 'buttondown',
	},
};

module.exports = siteMetadata;
