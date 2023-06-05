import styled from '@emotion/styled';
import { type FC } from 'react';

const LogoDots = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 0.1em;
	left: 0.1em;
	bottom: 0;
	transform: translateY(40%);

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

const StyledDiv = styled.div`
	font-family: Inter Tight;
	display: inline;
	font-weight: 700;
	font-size: 1em;
	line-height: inherit;
	position: relative;
`;

const Logo: FC = () => {
	return (
		<StyledDiv role="img" title="Graphix Collab, LLC">
			GraphixCollab
			<LogoDots>
				<div />
				<div />
				<div />
				<div />
			</LogoDots>
		</StyledDiv>
	);
};

export default Logo;
