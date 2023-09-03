import glob from 'glob';
import fs from 'fs';
import path from 'path';
import sharp, {type SharpOptions, type WebpOptions} from 'sharp';
import chalk from 'chalk';

const sharpOptions: SharpOptions = {
	animated: true,
};

const webpOptions: WebpOptions = {
	quality: 95,
	smartSubsample: true,
	effort: 6,
};

const filesWithImageStrings = await glob('src/**/*.{json,ts,tsx,js,jsx,md,mdx,css,scss,html}');
const sourceImages = await glob('src/**/*.{png,jpg,jpeg,avif,webp,gif,svg}');

const imageStringMatcher = /assets\/(?<imagePath>.*)-min@(?<imageWidth>.*)w.webp/gim;

// loop through files with image strings
// create array of images to resize

type ImageToResize = {
	sourceImage: string;
	targetDir: string;
	targetFile: string;
	width: string;
};

const imagesToResize: ImageToResize[] = [];

for await (const file of filesWithImageStrings) {
	const fileContents = fs.readFileSync(file, 'utf8');

	const matches = fileContents.matchAll(imageStringMatcher);

	const images = [...matches].map(match => {
		const {
			imagePath,
			imageWidth,
		} = match.groups ?? {};

		// find source image
		const sourceImage = sourceImages.find(imageName => imageName.includes(imagePath));

		console.log({sourceImage});

		if (sourceImage) {
			// construct target dir
			const {dir, base} = path.parse(imagePath);
			const targetDir = path.join('public/assets', dir);
			const resizedImageName = `${base}-min@${imageWidth}w.webp`;

			return {
				sourceImage,
				targetDir: targetDir,
				targetFile: path.join(targetDir, resizedImageName),
				width: imageWidth,
			};
		}

		return undefined;
	});

	if (images) {
		imagesToResize.push(...(images as ImageToResize[]));
	}
}

imagesToResize.forEach(async props => {
	if (fs.existsSync(props.targetFile)) {
		return;
	}

	console.log(
		chalk.red(`Resizing ${props.sourceImage} to ${props.targetFile}`),
	);

	const resizedImage
		= props.width === 'og'
			? await sharp(props.sourceImage, sharpOptions)
				.webp(webpOptions)
				.toBuffer()
			: await sharp(props.sourceImage, sharpOptions)
				.resize(parseInt(props.width, 10))
				.webp(webpOptions)
				.toBuffer();

	if (!fs.existsSync(props.targetDir)) {
		fs.mkdirSync(props.targetDir, {recursive: true});
	}

	fs.writeFileSync(props.targetFile, resizedImage);

	console.log(chalk.greenBright(`Resized ${props.sourceImage} to ${props.targetFile}`));
});
