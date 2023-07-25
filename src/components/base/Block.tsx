import {styled} from '@mui/material';
import {css} from 'code-tag';
import clsx from 'clsx';
import {type ComponentPropsWithRef, type FC} from 'react';
import {_e} from '../../utils/excludePropsFromForwarding';

export type BlockProps = {
	/**
	 * Disables the block's inline margin
	 */
	hasNoDefaultMargin?: boolean;
	color?: Exclude<ColorVariant, 'text'> | 'grey';
	isRounded?: boolean;
	isClipped?: boolean;
	hasNoHorizontalPadding?: boolean;
} & ComponentPropsWithRef<'div'>;

const StyledDiv = styled(
	'div',
	_e('hasNoDefaultMargin', 'color', 'isRounded', 'isClipped', 'hasNoHorizontalPadding'),
)<BlockProps>(
	({
		theme,
		color,
		hasNoDefaultMargin,
		hasNoHorizontalPadding,
		isClipped,
		isRounded = false,
	}) => {
		const resolvedColor = color ?? 'default';
		const blockColor = resolvedColor === 'default' ? 'transparent' : `var(--color-brand-${resolvedColor}-lightest)`;
		const borderColor = resolvedColor === 'default' ? 'transparent' : `var(--color-brand-${resolvedColor}-lighter)`;

		return css`
			--section-padding-block: var(--section-mobile-padding-block);
			--section-padding-inline: var(--section-mobile-padding-inline);
			--section-margin-inline: 0rem;
			--section-border-radius: none;

			${theme.breakpoints.up('md')} {
				--section-padding-block: var(--section-tablet-padding-block);
				--section-padding-inline: ${hasNoHorizontalPadding ? 'unset' : 'var(--section-tablet-padding-inline)'};
				--section-margin-inline: var(--section-tablet-margin-inline);
				--section-border-radius: 0.5rem;
			}

			${theme.breakpoints.up('xl')} {
				--section-padding-block: var(--section-desktop-padding-block);
				--section-padding-inline: ${hasNoHorizontalPadding ? 'unset' : 'var(--section-tablet-padding-inline)'};
			}

			background-color: transparent;
			border-top: solid 1px ${borderColor};
			border-right: unset;
			border-bottom: solid 1px ${borderColor};
			border-left: unset;
			position: relative;

			padding-block: var(--section-padding-block);
			padding-inline: var(--section-padding-inline);
			margin-inline: ${hasNoDefaultMargin ? 'unset' : 'var(--section-margin-inline)'};
			border-radius: ${isRounded ? 'var(--section-border-radius)' : 'none'};
			${isClipped ? 'overflow: hidden;' : ''};

			${theme.breakpoints.up('md')} {
				border-top: solid 1px ${borderColor};
				border-right: solid 1px ${borderColor};
				border-bottom: solid 1px ${borderColor};
				border-left: solid 1px ${borderColor};
			}
		`;
	},
);

export const Block: FC<BlockProps> = ({className, children, ...props}) => (
	<StyledDiv {...props} className={clsx('Block-root', className)}>
		{children}
	</StyledDiv>
);
