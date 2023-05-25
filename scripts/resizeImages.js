const {glob} = require('glob');
const sharp = require('sharp');
const path = require('path');

const metaSizes = [16, 32, 100];
const websiteSizes = [150, 250, 250, 1200, 1280, 1600, 1920];

// resize all images using sharp, excluding the ones in node_modules
const resizeImages = async () => {
	const files = await glob(['public/**/*.{png,jpg,jpeg,svg}']);

	files.forEach(async file => {
		const {dir, name, ext} = path.parse(file);
		const image = await sharp(file).metadata();

		const constrainedSizes = websiteSizes.filter(
			size => image.width >= size
		);

		constrainedSizes.forEach(async size => {
			console.log(file);

			await sharp(file)
				.resize(size)
				.toFile(`${dir}/${name}@${size}w.webp`);
			// .webp({
			// 	lossless: true,
			// 	dir: `test/${dir}/${name}@${size}w.webp`,
			// 	file: `test/${dir}/${name}@${size}w.webp`
			// });
		});
	});
};

resizeImages();
