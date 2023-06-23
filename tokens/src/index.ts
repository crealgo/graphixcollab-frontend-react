import { existsSync, rmSync } from 'fs';
import { glob } from 'glob';
import StyleDictionary from 'style-dictionary';
import { type RawTokenObject } from './types';
import { scaleColor } from './utils/color';
import { formatTokens } from './utils/format-tokens';

const tokenDir = 'tokens/src/tokens/';
const distDir = 'tokens/build/';

const rawFilePaths = await glob(`${tokenDir}/**/*.ts`, {
	nodir: true,
	ignore: [`${tokenDir}/**/*.d.ts`],
	noext: true
});

const filePaths = rawFilePaths.map(filePath =>
	filePath.replace(tokenDir, './tokens/')
);

let rawTokens: RawTokenObject = {};

for await (const filePath of filePaths) {
	const newTokens = (await import(filePath)).default as RawTokenObject;
	rawTokens = { ...rawTokens, ...newTokens };
}

const tokens = formatTokens(rawTokens);

// console.log(inspect(tokens.sequence, false, null, true));

// clean build directory
if (existsSync(distDir)) {
	rmSync(distDir, { recursive: true });
}

StyleDictionary.registerTransform({
	name: 'generate-scale',
	type: 'value',
	transitive: true,
	matcher: token =>
		/darkest|darker|dark|main|light|lighter|lightest|contrast/g.test(
			token.name
		),
	transformer: token => {
		return scaleColor(token.value as string, token.name);
	}
});

const client = StyleDictionary.extend({
	tokens,
	platforms: {
		css: {
			buildPath: 'tokens/build/',
			transforms: [
				'generate-scale',
				'attribute/cti',
				'name/cti/kebab',
				'time/seconds',
				'content/icon',
				'size/rem',
				'color/css'
			],
			files: [
				{
					destination: 'tokens.css',
					format: 'css/variables'
				}
			]
		},
		js: {
			transformGroup: 'js',
			buildPath: 'tokens/build/',
			files: [
				{
					destination: 'tokens.json',
					format: 'json/nested'
				},
				{
					destination: 'tokens.cjs',
					format: 'javascript/module'
				},
				{
					destination: 'tokens.d.cts',
					format: 'typescript/module-declarations'
				},
				{
					destination: 'tokens.mjs',
					format: 'javascript/es6'
				},
				{
					destination: 'tokens.d.mts',
					format: 'typescript/es6-declarations'
				}
			]
		}
	}
});

client.buildAllPlatforms();
