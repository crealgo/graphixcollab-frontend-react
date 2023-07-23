import styled from '@emotion/styled';
import {type InputProps} from '../Input';
import {generateBaseInputStyles} from '../generateBaseInputStyles';

export const BaseWrapper = styled('div')<InputProps>`
	${generateBaseInputStyles};
	cursor: pointer;
	display: inline-grid;
	position: relative;
	background-color: var(--color-gray-100);
	overflow: hidden;

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

	&::before {
		content: "✅ Drop 'em!";
		display: flex;
		position: absolute;
		place-content: center;
		place-items: center;
		inset: 0 0 0 0;
		background-color: var(--color-brand-secondary-lighter);
		letter-spacing: var(--type-body-font-leading-small);
		font-size: var(--type-heading-font-size-large-5);

		transition: all 150ms;
		transform: translateY(0.25rem);
		opacity: 0;
	}

	&.is-drag-active::before {
		transform: translateY(0);
		opacity: 1;
	}
`;
