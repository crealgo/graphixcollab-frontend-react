import styled from '@emotion/styled';

type BrandDotsProps = {
	size?: Size;
};

const BrandDotsWrapper = styled.span<BrandDotsProps>`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 0.06em;
	left: 0.07em;
	bottom: -0.09em;

	div {
		width: 0.25em;
		height: 0.25em;
		border-radius: 50%;

		&:nth-of-type(1) {
			background: var(--color-brand-cyan-main);
		}

		&:nth-of-type(2) {
			background: var(--color-brand-magenta-main);
		}

		&:nth-of-type(3) {
			background: var(--color-brand-yellow-main);
		}

		&:nth-of-type(4) {
			background: var(--color-brand-key-main);
		}
	}
`;

export const BrandDots = () => (
	<BrandDotsWrapper>
		<div />
		<div />
		<div />
		<div />
	</BrandDotsWrapper>
);
