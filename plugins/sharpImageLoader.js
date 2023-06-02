// @ts-check

/** @type {import('next/image').ImageLoader} */
export const sharpImageLoader = ({ src }) => {
	console.log(src);

	return src;
};
