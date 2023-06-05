import { styled } from '@mui/material';
import { css } from 'code-tag';
import clsx from 'clsx';
import { type ComponentPropsWithRef, type FC } from 'react';
import { _e } from '../../utils/excludePropsFromForwarding';
import { type ColorVariants } from '../../types/color';

export type BlockProps = {
	/**
	 * Disables the block's inline margin
	 */
	hasNoDefaultMargin?: boolean;
	color?: Exclude<ColorVariants, 'text'> | 'grey';
	isRounded?: boolean;
	isClipped?: boolean;
	hasNoHorizontalPadding?: boolean;
} & ComponentPropsWithRef<'div'>;

const StyledDiv = styled(
	'div',
	_e(
		'hasNoDefaultMargin',
		'color',
		'isRounded',
		'isClipped',
		'hasNoHorizontalPadding'
	)
)<BlockProps>(
	({
		theme,
		color,
		hasNoDefaultMargin,
		hasNoHorizontalPadding,
		isClipped,
		isRounded = false
	}) => {
		const blockColor = {
			default: 'transparent',
			primary: 'var(--color-brand-primary-light)',
			secondary: 'var(--color-brand-secondary-light)',
			tertiary: 'var(--color-brand-tertiary-light)',
			grey: 'var(--color-gray-50)'
		}[color ?? 'default'];

		return css`
			--section-padding-block: var(--section-mobile-padding-block);
			--section-padding-inline: var(--section-mobile-padding-inline);
			--section-margin-inline: 0rem;
			--section-border-radius: none;

			${theme.breakpoints.up('md')} {
				--section-padding-block: var(--section-tablet-padding-block);
				--section-padding-inline: ${hasNoHorizontalPadding
					? 'unset'
					: 'var(--section-tablet-padding-inline)'};
				--section-margin-inline: var(--section-tablet-margin-inline);
				--section-border-radius: 0.5rem;
			}

			${theme.breakpoints.up('xl')} {
				--section-padding-inline: ${hasNoHorizontalPadding
					? 'unset'
					: 'var(--section-tablet-padding-inline)'};
			}

			background-color: ${blockColor};
			position: relative;

			padding-block: var(--section-padding-block);
			padding-inline: var(--section-padding-inline);
			margin-inline: ${hasNoDefaultMargin
				? 'unset'
				: 'var(--section-margin-inline)'};
			border-radius: ${isRounded
				? 'var(--section-border-radius)'
				: 'none'};
			${isClipped ? 'overflow: hidden;' : ''};
		`;
	}
);

export const Block: FC<BlockProps> = ({ className, children, ...props }) => (
	<StyledDiv {...props} className={clsx('Block-root', className)}>
		{children}
	</StyledDiv>
);
