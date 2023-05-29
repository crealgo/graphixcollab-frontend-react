// @ts-check

/** @type {import('next/image').ImageLoader} */
export const sharpImageLoader = ({src, width, quality}) => {
	console.log(src);

	return src;
};
