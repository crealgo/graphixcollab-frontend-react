const colorComboMap = {
	cyan: ['hsla(195, 93%, 64%, %%alpha%%)', 'hsla(41, 100%, 84%,  %%alpha%%)'],
	magenta: ['hsla(341, 100%, 83%,  %%alpha%%)', 'hsla(41, 100%, 84%,  %%alpha%%)'],
	yellow: ['hsla(41, 100%, 84%,  %%alpha%%)', 'hsla(341, 100%, 83%,  %%alpha%%)'],
	key: ['hsla(22, 24%, 91%,  %%alpha%%)', 'hsla(195, 93%, 64%, %%alpha%%)'],
};

type PatternColor = Extract<ColorVariant, 'cyan' | 'magenta' | 'yellow' | 'key'>;
type PatterColorCombo = typeof colorComboMap[PatternColor];

export const generatePattern = (colorCombo: PatterColorCombo) => {
	const combo = colorCombo;
	combo[0] = combo[0].replace('%%alpha%%', '1');
	combo[1] = combo[1].replace('%%alpha%%', '1');

	return `"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(3) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='${combo[0]}'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='2' stroke='${combo[1]}' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"`;
};

export const generatePatternBackground = (primaryColor: PatternColor, alpha = '0.675') => {
	const combo = colorComboMap[primaryColor];
	const combo0 = combo[0].replace('%%alpha%%', alpha);
	const combo1 = combo[1].replace('%%alpha%%', alpha);

	const gradient = `radial-gradient(circle at 0% 0%, ${combo0}, ${combo1})`;
	const pattern = generatePattern(colorComboMap[primaryColor]);

	return `${gradient}, url(${pattern})`;
};

