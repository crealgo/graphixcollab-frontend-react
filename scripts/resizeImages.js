const { glob } = require('glob');
const sharp = require('sharp');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

const faviconSizes = [16, 32, 96, 192];
const websiteSizes = [150, 192, 250, 250, 512, 1200, 1280, 1600, 1920];

const globPath = 'src/assets';
const exportPath = 'public/assets';
const resolvePath = path => path.replace(globPath, exportPath);

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

// resize all images using sharp, excluding the ones in node_modules
const resizeImages = async () => {
	const files = await glob(`${globPath}/**/*.*`);

	files.every(async file => {
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

		chalk.green(`Resizing ${file}`);
		chalk.red(`Size: OG`);

		const resolvedPath = resolvePath(parsedPath.dir);

		// check if directory exists, if not create it, including all parent directories
		if (!fs.existsSync(resolvedPath)) {
			fs.mkdirSync(resolvedPath, { recursive: true });
		}

		// convert original image to webp, with original size
		await sharp(file, sharpOptions)
			.webp(webpOptions)
			.toFile(`${resolvedPath}/${parsedPath.name}-min@ogw.webp`);

		// convert original image to webp, with original size
		refinedSizeArray.forEach(async size => {
			chalk.red(`Size: ${size}w`);
			await sharp(file, sharpOptions)
				.resize(size)
				.webp(webpOptions)
				.toFile(`${resolvedPath}/${parsedPath.name}-min@${size}w.webp`);
		});
	});
};

resizeImages();
