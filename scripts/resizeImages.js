const {glob} = require('glob');
const sharp = require('sharp');
const path = require('path');
const chalk = require('chalk');

// const metaSizes = [16, 32, 100];
const faviconSizes = [16, 32, 96, 192];
const websiteSizes = [150, 192, 250, 250, 512, 1200, 1280, 1600, 1920];

const resizeSteps = async (file, sharpOptions, parsedPath, sizeArray) => {
	chalk.green(`Resizing ${file}`);

	chalk.red(`Size: OG`);
	await sharp(file, sharpOptions)
		.webp({
			quality: 90,
			lossless: true
		})
		.toFile(`${parsedPath.dir}/${parsedPath.name}@ogw.webp`);

	// convert original image to webp, with original size
	sizeArray.forEach(async size => {
		chalk.red(`Size: ${size}w`);
		await sharp(file, sharpOptions)
			.resize(size)
			.webp({
				quality: 90,
				lossless: true
			})
			.toFile(`${parsedPath.dir}/${parsedPath.name}@${size}w.webp`);
	});
};

// resize all images using sharp, excluding the ones in node_modules
const resizeImages = async () => {
	const files = await glob(['public/assets/**/*.*']);

	files.forEach(async file => {
		const parsedPath = path.parse(file);
		const image = await sharp(file).metadata();

		// check if image is smaller than some of the sizes
		const constrainedWebsiteSizes = websiteSizes.filter(
			size => image.width >= size
		);

		const constrainedFaviconSizes = parsedPath.dir.match(/brandmark|logo/i)
			? faviconSizes.filter(size => image.width >= size)
			: [];

		const sharpOptions = {
			animated: true
		};

		const sizeArray = [
			...constrainedWebsiteSizes,
			...constrainedFaviconSizes
		];

		// convert original image to webp, with original size
		await resizeSteps(file, sharpOptions, parsedPath, sizeArray);
	});
};

resizeImages();
