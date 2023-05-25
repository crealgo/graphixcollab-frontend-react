const {glob} = require('glob');
const sharp = require('sharp');
const path = require('path');

// resize all images using sharp, excluding the ones in node_modules
const resizeImages = async () => {
	const files = await glob(['{public,src}/**/*.{png,jpg,jpeg,svg}']);

	files.forEach(file => {
		console.log(file);

		const p = path.parse(file);

		sharp(file).resize(500).toFile(`${p.dir}/${p.name}-500w${p.ext}`);
	});
};

resizeImages();
