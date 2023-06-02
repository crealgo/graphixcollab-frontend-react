const stringifyTokens = require('./stringifyTokens');

const StyleDictionary = require('style-dictionary').extend({
	source: ['tokens/src/tokens/**/*.js'],
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'tokens/build/css/',
			files: [
				{
					destination: 'variables.css',
					format: 'css/variables'
				}
			]
		}
	}
});

// const StyleDictionary = require('style-dictionary').extend({
// 	platforms: {
// 		css: {
// 			transformGroup: 'css',
// 			transforms: ['attribute/cti', 'name/cti/kebab', 'color/variants'],
// 			buildPath: 'tokens/test/dist/',
// 			files: [
// 				{
// 					destination: 'variables.css',
// 					format: 'css/variables'
// 				}
// 			]
// 		}
// 	},
// 	tokens: {
// 		color: {
// 			globals: {
// 				cyan: {value: '#00aad2'},
// 				magenta: {value: '#d40072'},
// 				yellow: {value: '#edb700'},
// 				key: {value: '#111827'}
// 			},
// 			brand: {
// 				primary: {value: '{color.globals.cyan}'},
// 				secondary: {value: '{color.globals.magenta}'},
// 				tertiary: {value: '{color.globals.yellow}'}
// 			}
// 		}
// 	}
// });

// StyleDictionary.registerTransform({
// 	name: 'color/variants',
// 	type: 'attribute',
// 	transitive: true,
// 	transformer: token => {
// 		console.log({token});
// 		return {
// 			...token,
// 			value: 'Hello'
// 		};
// 	}

// });

StyleDictionary.buildAllPlatforms();

stringifyTokens();
