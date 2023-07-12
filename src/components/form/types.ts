import { type ReactNode } from 'react';

export type OptionBag = {
	value: string;
	label: ReactNode;
	meta?: ReactNode;
};
