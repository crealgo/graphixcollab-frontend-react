import styled from '@emotion/styled';
import {type FC} from 'react';

const LogoDots = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 0.1em;
	left: 0.1em;
	transform: translateY(-0.125em);

	div {
		width: 0.25em;
		height: 0.25em;
		border-radius: 50%;

		&:nth-child(1) {
			background: var(--color-brand-cyan-main);
		}

		&:nth-child(2) {
			background: var(--color-brand-magenta-main);
		}

		&:nth-child(3) {
			background: var(--color-brand-yellow-main);
		}

		&:nth-child(4) {
			background: var(--color-brand-key-main);
		}
	}
`;

const StyledDiv = styled.div`
	font-weight: bold;
	font-size: 1em;
	line-height: inherit;
	letter-spacing: -0.05em;
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
