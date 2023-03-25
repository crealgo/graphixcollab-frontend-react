import parse from 'style-to-object';

type ParsedCSSObject = {
	[key: string]: string | number | Record<string, ParsedCSSObject>;
};

export const css = (...template: (TemplateStringsArray | string)[]): ParsedCSSObject => {
	const parsed = parse(`${template}`);

	return parsed ?? {};
};
