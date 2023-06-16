import glob from 'glob';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import chalk from 'chalk';

/**  @type {import('sharp').SharpOptions} */
const sharpOptions = {
	animated: true
};

/**  @type {import('sharp').WebpOptions} */
const webpOptions = {
	quality: 95,
	smartSubsample: true,
	effort: 6
};

// get all files
const filesWithImageStrings = await glob(
	`src/**/*.{json,ts,tsx,js,jsx,md,mdx,css,scss,html}`
);

const sourceImages = await glob(`src/**/*.{png,jpg,jpeg,avif,webp,gif,svg}`);

// console.log({ sourceImages });

const imageStringMatcher =
	/assets\/(?<imagePath>.*)-min@(?<imageWidth>.*)w.webp/gim;

// loop through files with image strings
// create array of images to resize

/**
 * @typedef {Object} ImageToResize
 * @property {string} sourceImage
 * @property {string} targetDir
 * @property {string} targetFile
 * @property {'og' | string} width
 * */

/**
 * @type {ImageToResize[]} imagesToResize
 * */
let imagesToResize = [];

filesWithImageStrings.forEach(image => {
	const fileContents = fs.readFileSync(image, 'utf8');

	const matches = fileContents.matchAll(imageStringMatcher);

	const images = [...matches].map(match => {
		const {
			/** @type {string} */
			imagePath,
			/** @type {string} */
			imageWidth
		} = match.groups ?? {};

		// find source image
		const sourceImage = sourceImages.find(imageName =>
			imageName.includes(imagePath)
		);

		if (sourceImage) {
			// construct target dir
			const { dir, base } = path.parse(imagePath);
			const targetDir = path.join('public/assets', dir);
			const resizedImageName = `${base}-min@${imageWidth}w.webp`;

			return {
				sourceImage,
				targetDir: targetDir,
				targetFile: path.join(targetDir, resizedImageName),
				width: imageWidth
			};
		}
	});

	if (images) {
		imagesToResize.push(...images);
	}
});

// console.log({ imagesToResize });

// resize images if need be
imagesToResize.forEach(async props => {
	// skip if the file already exists
	if (fs.existsSync(props.targetFile)) {
		// FOR DEV: uncomment to see which files are skipped
		// console.log(
		// 	chalk.bgYellow(`${props.sourceImage} already exists, skipping...`)
		// );
		return;
	} else {
		console.log(
			chalk.red(`Resizing ${props.sourceImage} to ${props.targetFile}`)
		);
	}

	// needs to optimize for og image
	const resizedImage =
		props.width === 'og'
			? await sharp(props.sourceImage, sharpOptions)
					.webp(webpOptions)
					.toBuffer()
			: await sharp(props.sourceImage, sharpOptions)
					.resize(parseInt(props.width))
					.webp(webpOptions)
					.toBuffer();

	// create directory if it doesn't exist
	if (!fs.existsSync(props.targetDir)) {
		fs.mkdirSync(props.targetDir, { recursive: true });
	}

	fs.writeFileSync(props.targetFile, resizedImage);

	console.log(
		chalk.greenBright(`Resized ${props.sourceImage} to ${props.targetFile}`)
	);
});
