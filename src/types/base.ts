import {type Size} from './general';

export type BaseElement = JSX.IntrinsicElements['div'];
export type BaseComponentsProps<T = unknown> = Pick<
	BaseElement,
	'className' | 'id' | 'children'
> &
	T;

export type BaseInputProps = {
	/** The size of the input. */
	inputSize?: Size;
	/** The status of the input */
	status?: 'error' | 'success';
};
