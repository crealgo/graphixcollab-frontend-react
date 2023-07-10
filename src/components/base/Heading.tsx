import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type FC } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = BaseComponentProps & {
	level?: HeadingLevel;
	isCentered?: boolean;
	isContrast?: boolean;
	hasMargin?: boolean;
};

const BaseElement = styled.span<HeadingProps>(
	props => css`
		--type-heading-font-size: var(
			--type-heading-font-size-small-${props.level}
		);

		--type-heading-align: ${props.isCentered ? 'center' : 'unset'};

		@media screen and (min-width: 425px) {
			--type-heading-font-size: var(
				--type-heading-font-size-medium-${props.level}
			);
		}

		@media screen and (min-width: 768px) {
			--type-heading-font-size: var(
				--type-heading-font-size-large-${props.level}
			);
		}

		font-size: var(--type-heading-font-size);
		font-family: var(--type-heading-font-family);
		font-weight: var(--type-heading-font-weight);
		line-height: var(--type-heading-font-leading);
		color: var(--color-text-${props.isContrast ? 'contrast' : 'primary'});
		text-align: var(--type-heading-align);

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
