import styled from '@emotion/styled';
import {type HTMLProps} from 'react';

export const Dots = styled((props: HTMLProps<HTMLDivElement>) => (
	<div {...props}>
		<div/>
		<div/>
		<div/>
		<div/>
	</div>
))`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 0.05em;
	left: 0.05em;
	transform: translateY(-0.125em);

	div {
		width: 0.175em;
		height: 0.175em;
		border-radius: 50%;

		&:nth-of-type(1) {
			background: var(--color-brand-primary-main);
		}

		&:nth-of-type(2) {
			background: var(--color-brand-secondary-main);
		}

		&:nth-of-type(3) {
			background: var(--color-brand-tertiary-main);
		}

		&:nth-of-type(4) {
			background: var(--color-text-primary);
		}
	}
`;
