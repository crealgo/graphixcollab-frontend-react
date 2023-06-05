import styled from '@emotion/styled';
import { type BaseComponentsProps } from '../../types/base';
import clsx from 'clsx';
import { type FC } from 'react';
import { css } from '@emotion/react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const HeadingText = styled.span`
	mark {
		background-color: var(--mark-background-color);
		color: var(--mark-color);
	}
`;

export type HeadingProps = BaseComponentsProps<{
	level?: HeadingLevel;
	isContrast?: boolean;
	hasMargin?: boolean;
}>;

const BaseElement = styled.span<HeadingProps>(
	props => css`
		font-size: var(--type-heading-font-size-${props.level});
		font-family: var(--type-heading-font-family);
		font-weight: var(--type-heading-font-weight);
		letter-spacing: var(--type-heading-font-tracking);
		line-height: var(--type-heading-font-leading);
		color: var(--color-text-${props.isContrast ? 'contrast' : 'primary'});

		margin: ${props.hasMargin
			? 'var(--type-heading-font-margin-top) 0 var(--type-heading-font-margin-bottom)'
			: 'unset'};
	`
);

export const Heading: FC<HeadingProps> = ({ children, ...props }) => {
	const resolvedLevel = props.level ?? 6;
	const resolvedComponent = `h${resolvedLevel}` as const;

	return (
		<BaseElement {...props} as={resolvedComponent}>
			{children}
		</BaseElement>
	);
};
