// const stringifyTokens = require('./stringifyTokens');
import stringifyTokens from './stringifyTokens';
import * as StyleDictionary from 'style-dictionary';

const client = StyleDictionary.extend({
	source: ['tokens/src/tokens/**/*.js'],
	platforms: {
		css: {
			transFormControl: 'css',
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
