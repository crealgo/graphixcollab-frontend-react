import glob from 'glob';
import fs from 'fs';
import path from 'path';
import sharp, {type SharpOptions, type WebpOptions} from 'sharp';
import chalk from 'chalk';

type ImageToResize = {
	sourceImage: string;
	targetDir: string;
	targetFile: string;
	width: string;
};

const sharpOptions: SharpOptions = {
	animated: true,
};

const webpOptions: WebpOptions = {
	quality: 95,
	smartSubsample: true,
	effort: 6,
};

const filesToSearch = await glob('src/**/*.{json,ts,tsx}');
// const sourceImages = await glob('src/**/*.{png,jpg,jpeg,avif,webp,gif,svg}');b

const imageStringMatcher = /assets\/(?<imagePath>.*)-min@(?<imageWidth>.*)w.webp/gim;

// loop through files with image strings
// create array of images to resize
// const imagesToResize: ImageToResize[] = [];

for await (const file of filesToSearch) {
	const matches = imageStringMatcher.exec(await fs.promises.readFile(file, 'utf8'));

	if (!matches?.groups) {
		continue;
	}

	const {imagePath, imageWidth} = matches.groups;

	// check if image has been resized already
	if (fs.existsSync(`public/assets/${imagePath}-min@${imageWidth}w.webp`)) {
		// console.log(chalk.yellow(`${chalk.white(fileName)} has already been resized!`));
		continue;
	}

	// find source file
	const sourceFileSearch = await glob(`src/assets/${imagePath}.*`);

	// check if source file exists
	if (!sourceFileSearch.length) {
		console.log(chalk.red(`${chalk.white(imagePath)} does not exist!`));
		continue;
	}

	const sourceFile = sourceFileSearch[0];

	let resizedImage = null;

	if (imageWidth === 'og') {
		resizedImage = await sharp(sourceFile, sharpOptions).webp(webpOptions).toBuffer();
	} else {
		resizedImage = await sharp(sourceFile, sharpOptions).resize(parseInt(imageWidth, 10)).webp(webpOptions).toBuffer();
	}

	const newFile = `public/assets/${imagePath}-min@${imageWidth}w.webp`;

	await fs.promises.mkdir(path.dirname(newFile), {
		recursive: true,
	});

	await fs.promises.writeFile(newFile, resizedImage);
}
