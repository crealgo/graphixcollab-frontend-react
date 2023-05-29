const {glob} = require('glob');
const sharp = require('sharp');
const path = require('path');
const chalk = require('chalk');

// const metaSizes = [16, 32, 100];
const faviconSizes = [16, 32, 96, 192];
const websiteSizes = [150, 192, 250, 250, 512, 1200, 1280, 1600, 1920];

/**  @type {import('sharp').SharpOptions} */
const sharpOptions = {
	animated: true
};

/**  @type {import('sharp').WebpOptions} */
const webpOptions = {
	quality: 95,
	smartSubsample: true
};

const resizeSteps = async (file, parsedPath, sizeArray) => {
	chalk.green(`Resizing ${file}`);

	chalk.red(`Size: OG`);
	await sharp(file, sharpOptions)
		.webp(webpOptions)
		.toFile(`${parsedPath.dir}/${parsedPath.name}@ogw.webp`);

	// convert original image to webp, with original size
	sizeArray.forEach(async size => {
		chalk.red(`Size: ${size}w`);
		await sharp(file, sharpOptions)
			.resize(size)
			.webp(webpOptions)
			.toFile(`${parsedPath.dir}/${parsedPath.name}@${size}w.webp`);
	});
};

// resize all images using sharp, excluding the ones in node_modules
const resizeImages = async () => {
	const files = (await glob(['public/assets/**/*.*'])).filter(
		f => !f.includes('@')
	);

	files.forEach(async file => {
		chalk.green(`Resizing ${file}`);

		const parsedPath = path.parse(file);
		const image = await sharp(file).metadata();
		let refinedSizeArray = [];

		// check if image is smaller than some of the sizes
		if (parsedPath.ext === '.svg') {
			refinedSizeArray = [...websiteSizes, ...faviconSizes];
		} else {
			const constrainedWebsiteSizes = websiteSizes.filter(
				size => image.width >= size
			);
			const constrainedFaviconSizes = parsedPath.dir.match(
				/brandmark|logo/i
			)
				? faviconSizes.filter(size => image.width >= size)
				: [];

			refinedSizeArray = [
				...constrainedWebsiteSizes,
				...constrainedFaviconSizes
			];
		}

		// convert original image to webp, with original size
		await resizeSteps(file, parsedPath, refinedSizeArray);
	});
};

resizeImages();
