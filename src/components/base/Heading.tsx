import {css} from '@emotion/react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import {type FC} from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = BaseComponentProps & {
	level?: HeadingLevel;
	isCentered?: boolean;
	isContrast?: boolean;
	hasMargin?: boolean;
};

type BaseElementProps = Pick<HeadingProps, 'level'>;

const BaseElement = styled.span<BaseElementProps>(props => css`
	--type-heading-font-size: var(--type-heading-font-size-small-${props.level});

	@media screen and (min-width: 425px) {
		--type-heading-font-size: var(--type-heading-font-size-medium-${props.level});
	}

	@media screen and (min-width: 768px) {
		--type-heading-font-size: var(--type-heading-font-size-large-${props.level});
	}

	margin: unset;
	font-family: var(--type-heading-font-family);
	font-weight: var(--type-heading-font-weight);
	line-height: var(--type-heading-font-leading);
	color: var(--color-text-primary);

	&.is-centered {
		text-align: center;
	}

	&.is-contrast {
		color: var(--color-text-contrast);
	}

	&.is-spaced {
		margin-block: var(--type-heading-font-margin-top) var(--type-heading-font-margin-bottom);
	}

	&.is-level-1 {
		font-size: var(--type-heading-font-size-large-1);
	}
`);

export const Heading: FC<HeadingProps> = props => {
	const resolvedLevel = props.level ?? 6;
	const resolvedComponent = `h${resolvedLevel}` as const;

	return (
		<BaseElement
			as={resolvedComponent}
			className={clsx(
				props.className,
				`is-level-${resolvedLevel}`,
				{
					'is-spaced': props.hasMargin,
					'is-centered': props.isCentered,
					'is-contrast': props.isContrast,
				},
			)}
		>
			{props.children}
		</BaseElement>
	);
};
