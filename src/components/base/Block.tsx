import { styled } from '@mui/material';
import { css } from 'code-tag';
import clsx from 'clsx';
import { type ComponentPropsWithRef, type FC } from 'react';
import { _e } from '../../utils/excludePropsFromForwarding';

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
			primary: 'var(--color-brand-primary-lighter)',
			secondary: 'var(--color-brand-secondary-lighter)',
			tertiary: 'var(--color-brand-tertiary-lighter)',
			grey: 'var(--color-gray-50)'
		}[color ?? 'default'];

		const borderColor = {
			default: 'transparent',
			primary: 'var(--color-brand-primary-main)',
			secondary: 'var(--color-brand-secondary-main)',
			tertiary: 'var(--color-brand-tertiary-main)',
			grey: 'var(--color-gray-200)'
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
				--section-padding-block: var(--section-desktop-padding-block);
				--section-padding-inline: ${hasNoHorizontalPadding
					? 'unset'
					: 'var(--section-tablet-padding-inline)'};
			}

			background-color: ${blockColor};
			border: solid 1px ${borderColor};
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
