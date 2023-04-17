/** @type {import('style-dictionary').Config} */
module.exports = {
	source: ['tokens/src/tokens/**/*.js'],
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
