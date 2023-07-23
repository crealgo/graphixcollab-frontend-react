import styled from '@emotion/styled';
import {type InputProps} from '../Input';
import {generateBaseInputStyles} from '../generateBaseInputStyles';

export const BaseElement = styled('div') <InputProps>`
	${generateBaseInputStyles};
	cursor: pointer;
	display: inline-grid;
	position: relative;
	background-color: var(--color-gray-100);

	min-height: 10rem;
	height: auto;
	padding-block: 1.75rem;
	border-style: dashed;
	place-content: center;
	place-items: center;

	font-size: 1rem;
	font-weight: normal;

	&:hover {
		background-color: var(--color-gray-200);
	}

	&:active {
		background-color: var(--color-gray-300);
	}

	&.has-files {
		border-style: solid;
		background-color: var(--color-gray-200);
	}

	&.is-drag-active::before {
		content: '✅ Drop \'em!';
		font-size: var(--type-heading-font-size-medium-5);
		position: absolute;
		display: flex;
		place-content: center;
		place-items: center;
		inset: 0 0 0 0;
		background-color: var(--color-brand-secondary-lighter);
	}

	.FileInput-input {
		position: absolute;
		inset: 0 0 0 0;
		opacity: 0;
	}
`;

export const DefaultFileInputDisplay = styled('div')`
	display: grid;
	gap: 0.5rem;
	place-content: center;
	place-items: center;
	/* pointer-events: none; */

	.accepts {
		color: var(--color-gray-500);
	}
`;
