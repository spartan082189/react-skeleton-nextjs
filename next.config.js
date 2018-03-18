const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
	webpack: (config, { dev }) => {
		const oldEntry = config.entry;

		config.entry = () =>
			oldEntry().then(entry => {
				entry['main.js'] && entry['main.js'].push(path.resolve('./tools/registerServiceWorker'));
				return entry;
			});

		/* Enable only in Production */
		if (!dev) {
			// Service Worker
			config.plugins.push(
				new SWPrecacheWebpackPlugin({
					cacheId: 'next-ss',
					filepath: './static/sw.js',
					minify: true,
					staticFileGlobsIgnorePatterns: [/\.next\//],
					staticFileGlobs: [
						'static/**/*' // Precache all static files by default
					],
					runtimeCaching: [
						// Example with different handlers
						{
							handler: 'fastest',
							urlPattern: /[.](png|jpg|css)/
						},
						{
							handler: 'networkFirst',
							urlPattern: /^http.*/ //cache all files
						}
					]
				})
			)
		}

		return config;
	}
}
