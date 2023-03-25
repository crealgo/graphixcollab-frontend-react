export type BaseElement = JSX.IntrinsicElements['div'];
export type BaseComponentsProps<T = unknown> = Pick<BaseElement, 'className' | 'id' | 'children'> & T;
