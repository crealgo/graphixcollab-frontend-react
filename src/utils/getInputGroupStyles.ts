import { css, type SerializedStyles } from '@emotion/react';

export const getInputGroupStyles = ({
	inputSize = 'medium'
}: BaseControlProps): SerializedStyles => css`
	border: unset;
	padding: unset;
	outline: unset;
	font-size: 1rem;

	height: var(--input-height-${inputSize});
	padding-inline: var(--input-spacing-padding-inline-${inputSize});
	font-size: var(--input-font-size-${inputSize});

	color: var(--input-text-color-primary);
	box-shadow: var(--input-shadow-elevation-0);
	border: var(--input-border-composite);
	border-radius: var(--input-bezel-${inputSize});
`;
