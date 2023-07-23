import {type RawToken} from '../types';

type AvatarPosition = {
	size: number;
	left: number;
	bottom: number;
};

type AvatarCssPosition = {
	width: RawToken;
	height: RawToken;
	left: RawToken;
	bottom: RawToken;
};

const createAvatarCss = ({
	size,
	left,
	bottom,
}: AvatarPosition): AvatarCssPosition => ({
	width: `${size * 0.95}px`,
	height: `${size * 0.95}px`,
	left: `${(left / 1680) * 100}%`,
	bottom: `${(bottom / 628.73) * 100}%`,
});

module.exports = {
	block: {
		testimonials: {
			container: {
				display: 'flex',
			},
			avatarPositions: {
				...[
					{
						size: 216,
						left: 0,
						bottom: 292.73,
					},
					{
						size: 142.91,
						left: 209.45,
						bottom: 119.27,
					},
					{
						size: 77.45,
						left: 290.18,
						bottom: 294.91,
					},
					{
						size: 77.45,
						left: 184.36,
						bottom: 0,
					},
					{
						size: 64.36,
						left: 1562.18,
						bottom: 45.09,
					},
					{
						size: 76.36,
						left: 1204.36,
						bottom: 246.18,
					},
					{
						size: 228,
						left: 1034.18,
						bottom: 320.36,
					},
					{
						size: 222.55,
						left: 441.82,
						bottom: 264.36,
					},
					{
						size: 94.91,
						left: 740.73,
						bottom: 390.91,
					},
					{
						size: 133.09,
						left: 855.27,
						bottom: 268.73,
					},
					{
						size: 171.27,
						left: 1309.09,
						bottom: 120.36,
					},
					{
						size: 172.36,
						left: 1316.73,
						bottom: 329.82,
					},
					{
						size: 150.55,
						left: 352.36,
						bottom: 437.82,
					},
					{
						size: 195.27,
						left: 666.55,
						bottom: 434.55,
					},
					{
						size: 103.64,
						left: 17.45,
						bottom: 71.27,
					},
					{
						size: 172.36,
						left: 1507.64,
						bottom: 250.18,
					},
					{
						size: 132,
						left: 1527.27,
						bottom: 45.09,
					},
				].map(createAvatarCss),
			},
		},
	},
};
