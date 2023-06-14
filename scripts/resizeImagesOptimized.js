import glob from 'glob';
import fs from 'fs';
// const sharp = require('sharp');
// const path = require('path');
// const chalk = require('chalk');
// const fs = require('fs');

// const faviconSizes = [16, 32, 96, 192];
// const websiteSizes = [150, 192, 250, 250, 512, 1200, 1280, 1600, 1920];

// const globPath = 'src/assets';
// const exportPath = 'public/assets';
// const resolvePath = path => path.replace(globPath, exportPath);

// get all files
const files = await glob(`src/**/*.{json,ts,tsx,js,jsx,md,mdx,css,scss,html}`);

// files.forEach(file => {
// 	console.log(file);

// 	const stuff = fs.readFileSync(file, 'utf8');
// });

// get file content
const content = fs.readFileSync(files[0]);

// check for webp images paths in file content
