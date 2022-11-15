/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				and: [/\.(js|ts)x?$/],
			},

			use: ['@svgr/webpack'],
		});

		return config;
	},
	experimental: {
		appDir: true,
	},
	images: {
		dangerouslyAllowSVG: true,
		domains: ['images.unsplash.com', 'tailwindui.com', 'dummyjson.com'],
	},
};

module.exports = nextConfig;
