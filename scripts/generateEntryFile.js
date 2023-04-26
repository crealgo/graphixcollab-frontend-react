import {writeFileSync} from 'fs';
import {globSync} from 'glob';

const tsFiles = globSync('src/{components,global,utils}/**/*.{ts,tsx}');
const refinedPathsString = tsFiles.reduce((templateString, path) => {
	const filePath = path.split('/');
	const filename = filePath.pop();
	const basename = filename ? filename.split('.').shift() : '';

	return `${templateString}\nexport * from '${filePath.join(
		'/'
	)}/${basename}';`;
}, '');

writeFileSync('src/index.ts', refinedPathsString);
