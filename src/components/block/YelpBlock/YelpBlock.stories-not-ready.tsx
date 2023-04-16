import Avatar from '@mui/material/Avatar';
import {css, styled} from '@mui/material/styles';
import {type FC} from 'react';
import {avatarSpecs, minHeight, minWidth} from './constants';
import {type StoryObj} from '@storybook/react';

const YelpBlockWrapper = styled('div')<{avatarCount?: number}>(({theme, avatarCount = 0}) => {
	const avatarCss = avatarSpecs.reduce((previousValue, {size, left, bottom}, currentIndex) => `
			${previousValue}

			&:nth-of-type(n + ${currentIndex + 1}) {
				width: ${size}px;
				height: ${size}px;
				left: calc(100% - ${left});
				bottom: ${bottom}px;
			}
		`, '');

	return css`
		position: relative;
		background-color: ${theme.palette.grey[200]};

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		min-height: ${minHeight}px;
		width: ${minWidth}px;

		overflow: hidden;

		& > .YelpBlock-quote {
			/* height: 100%; */
		}

		& > .YelpBlock-avatars {
			position: absolute;
			left: 0;
			right: 0;

			width: 100%;
			height: 100%;

			background: blue;

			& > .YelpBlock-avatar {
				position: absolute;
				${avatarCss};
			}
		}
	`;
});

const YelpBlock: FC<unknown> = props => {
	const avatarCount = 20;

	return (
		<YelpBlockWrapper className='YelpBlock-root' avatarCount={avatarCount}>
			<div className='YelpBlock-avatars'>
				{Array.from({length: avatarCount}, (_, index) => (
					<Avatar key={index} className='YelpBlock-avatar'/>
				))}
				;
			</div>
			{/* <Quote RatingProps={{ value: 2 }} className="YelpBlock-quote" /> */}
		</YelpBlockWrapper>
	);
};

export default {
	title: 'Blocks / Yelp Block',
	component: YelpBlock,
};

export const Default: StoryObj = {
	args: {},
};
