export type RawToken = string | number;

export type RawTokenObject = {
	[key: string]: RawToken | RawTokenObject;
};

export type FormattedToken = {
	value: string | number;
};

export type FormattedTokenObject = {
	[key: string]: FormattedToken | FormattedTokenObject;
};
