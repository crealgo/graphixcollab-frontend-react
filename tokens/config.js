const tokens = require('./src/tokens');

/** @type {import('style-dictionary').Config} */
module.exports = {
	tokens,
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'tokens/build/css/',
			files: [
				{
					destination: 'variables.css',
					format: 'css/variables',
				},
			],
		},
	},
};
