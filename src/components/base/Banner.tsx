import {Close} from '@mui/icons-material';
import {css, styled} from '@mui/material';
import {useMemo, useRef, type FC, type PropsWithChildren} from 'react';
import {type Action} from '../../types/general';
import {ActionStack} from './ActionStack';
import {Block} from './Block';
import {Container} from './Container';
import {IconButton} from './IconButton';
import {type IconButtonBaseProps} from './IconButtonBase';

export type BannerProps = PropsWithChildren<{
	text?: string;
	actions?: Action[];
	onCloseClick?: IconButtonBaseProps['onClick'];
	// ImageProps?: ImageProps;
}>;

const StyledBlock = styled(Block)(
	({theme}) => css`
		display: block;
		position: relative;
		background-color: ${theme.palette.error.light};
		padding-block: 0.5rem !important;
		color: white;

		.Banner-container {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			gap: 1rem;
		}

		.Banner-content {
			display: grid;
			grid-template-columns: auto auto;
			justify-content: center;

			width: 100%;
		}

		.Banner-textContent {
			font-size: 14px;
			font-weight: 500;
			line-height: var(--height-small-input);

			display: inline-block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.Banner-actionStack .Button-root,
		.Banner-closeButton {
			color: white;
		}

		.Banner-closeButton {
			flex: none;
		}
	`,
);

const BannerClose = styled(IconButton)`
	height: 1.5rem;
	font-size: 1rem;
`;

export const Banner: FC<BannerProps> = ({actions, onCloseClick, text, children}) => {
	const textRef = useRef<HTMLParagraphElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const playMarquee = useMemo(() => {
		if (textRef.current && containerRef.current) {
			console.log(textRef.current, containerRef.current);

			return textRef.current.offsetWidth > containerRef.current.offsetWidth;
		}

		return false;
	}, [textRef, containerRef]);

	const resolvedTitle = typeof children === 'string' ? children : '';

	return (
		<StyledBlock className='Banner-root' title={resolvedTitle}>
			<Container ref={containerRef} className='Banner-container'>
				<div className='Banner-content'>
					<span ref={textRef} className='Banner-textContent'>
						{children ?? text}
					</span>
					{actions?.length && (
						<ActionStack className='Banner-actionStack' size='small' color='text' actions={actions}/>
					)}
				</div>
				<BannerClose
					className='Banner-closeButton'
					aria-label='Close Banner'
					color='text'
					Icon={Close}
					onClick={onCloseClick}
				/>
			</Container>
		</StyledBlock>
	);
};
