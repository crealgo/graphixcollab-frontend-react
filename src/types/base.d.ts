declare type BaseElement<T extends keyof JSX.IntrinsicElements = 'div'> =
	JSX.IntrinsicElements[T];

declare type BaseComponentProps<T extends keyof JSX.IntrinsicElements = 'div'> =
	Pick<BaseElement<T>, 'className' | 'id' | 'children'>;
