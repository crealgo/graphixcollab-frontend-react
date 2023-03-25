import { camelCase, pascalCase } from 'change-case';
import { appendFileSync, existsSync, mkdirSync, renameSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

// const scriptFileName = 'changeFilenameCase';
// const outDir = 'scripts/dist';
// const logDir = 'scripts/logs';

const logFile = 'scripts/logs/changeFilenameCase.txt';

writeFileSync(logFile, '')

// globSync('docs/*.tsx').some(fileUrl => {
// 	const [base, file] = fileUrl.split('/');
// 	const [filename, ...extensions] = file.split('.');
// 	const extension = extensions.join('.');

// 	const newPathUrl = `${base}/${pascalCase(filename)}.${extension}`;

// 	// writeFileSync(logFile, newPathUrl)

// 	renameSync(fileUrl, newPathUrl)
// });

// globSync('src/components/**/*.{tsx,ts}').some(path => {
// 	const pathArray = path.split('/');
// 	const [filename, ...extensions] = (pathArray.pop() as string).split('.');
// 	const [base, componentDirectory, subDirectory] = pathArray;
// 	const extension = extensions.join('.');

// 	let newPath = `${base}/${componentDirectory}`;

// 	if (subDirectory) {
// 		newPath += `/${pascalCase(subDirectory)}`;

// 		// make dir
// 		if (!existsSync(newPath)) {
// 			mkdirSync(newPath);
// 		}
// 	}

// 	if (filename.match(/(constants|get-|index)/ig)) {
// 		newPath += `/${camelCase(filename)}.${extension}`;
// 	} else {
// 		newPath += `/${pascalCase(filename)}.${extension}`;
// 	}

// 	// appendFileSync(logFile, `${path}\n${newPath}--\n`)

// 	// if (subDirectory) return true;
// 	// renameSync(path, newPath)

// 	// copyFileSync(path, newPath)
// 	// rmSync(path)
// });


// globSync('src/{global,hooks,utils}/**/*.{tsx,ts}').some(path => {
// 	const pathArray = path.split('/');
// 	const [filename, ...extensions] = (pathArray.pop() as string).split('.');
// 	const [base, componentDirectory] = pathArray;
// 	const extension = extensions.join('.');

// 	const newPath = `${base}/${componentDirectory}/${camelCase(filename)}.${extension}`;

// 	appendFileSync(logFile, `${path}\n${newPath}--\n`)

// 	// if (subDirectory) return true;
// 	renameSync(path, newPath)

// 	// copyFileSync(path, newPath)
// 	// rmSync(path)
// });

