import styled from '@emotion/styled';
import clsx from 'clsx';
import {
	type PropsWithChildren,
	type ComponentPropsWithRef,
	type FC,
} from 'react';

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

const StyledDiv = styled.div`
	--section-padding-block: var(--section-mobile-padding-block);
	--section-padding-inline: var(--section-mobile-padding-inline);
	--section-margin-inline: 0rem;
	--section-border-radius: none;

	position: relative;

	padding-block: var(--section-padding-block);
	padding-inline: var(--section-padding-inline);
	max-width: 60rem;
	padding: 0 20px;

	h1,
	h2,
	p,
	i,
	a,
	.first-letter,
	.authorName a {
		color: rgba(0, 0, 0, 0.84);
		text-rendering: optimizeLegibility;
	}

	h1 {
		font-size: 48px;
		text-align: left;
		margin-bottom: 8px;
	}

	h2 {
		font-size: 26px;
		font-weight: 700;
		padding: 0;
		margin: 56px 0 -13px -1.883px;
		text-align: left;
		line-height: 34.5px;
		letter-spacing: -0.45px;
	}

	p,
	i,
	a {
		margin-top: 21px;
		font-size: 21px;
		letter-spacing: -0.03px;
		line-height: 1.58;
	}

	ol,
	ul {
		font-size: 18px;
		letter-spacing: -0.03px;
		line-height: 1.5;
	}

	a {
		text-decoration: underline;
	}

	blockquote {
		font-size: 30px;
		font-style: italic;
		letter-spacing: -0.36px;
		line-height: 44.4px;
		overflow-wrap: break-word;
		margin: 55px 0 33px 0;
		/* text-align: center; */
		color: rgba(0, 0, 0, 0.68);
		padding: 0 0 0 50px;
	}

	code {
		font-size: 18px;
		background: rgba(0, 0, 0, 0.05);
		border-radius: 2px;
		padding: 3px 5px;
	}
`;

export const BlogBlock: FC<PropsWithChildren> = props => (
	<StyledDiv className={clsx('BlogBlock-root')}>{props.children}</StyledDiv>
);
