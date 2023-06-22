// const stringifyTokens = require('./stringifyTokens');
import stringifyTokens from './scripts/stringify-tokens';
import * as StyleDictionary from 'style-dictionary';

const client = StyleDictionary.extend({
	source: ['tokens/src/tokens/**/*.js'],
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'tokens/build/css/',
			transforms: ['attribute/cti', 'name/cti/kebab'],
			files: [
				{
					destination: 'variables.css',
					format: 'css/variables'
				}
			]
		}
	}
});

client.buildAllPlatforms();

stringifyTokens();
