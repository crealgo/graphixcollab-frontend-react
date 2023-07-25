import {css, styled} from '@mui/material/styles';
import {type FC, type ReactNode} from 'react';
import {type NavItemOptions} from '../../types/general';
import {Block, type BlockProps} from '../base/Block';
import {type BreadcrumbOptions} from '../base/Breadcrumbs';
import {Container} from '../base/Container';
import {Heading} from '../base/Heading';
import {type ImageProps} from '../base/Image';
import {Text} from '../base/Text';
import {Mark} from '../base/Mark';

export type PageHeaderBlockProps = {
	title?: ReactNode;
	description?: string;
	color?: 'cyan' | 'magenta' | 'yellow' | 'key';
	breadcrumbs?: BreadcrumbOptions[];
	navigationItems?: NavItemOptions[];
	navigationType?: 'scroll' | 'anchor-link';
	BlockProps?: BlockProps;
	ImageProps?: ImageProps;
};

const generatePattern = (primaryColor: Extract<ColorVariant, 'cyan' | 'magenta' | 'yellow' | 'key'>, type?: string) => {
	const combo = {
		cyan: ['hsla(195, 93%, 64%,1)', 'hsla(41, 100%, 84%, 1)'],
		magenta: ['hsla(341, 100%, 83%, 1)', 'hsla(41, 100%, 84%, 1)'],
		yellow: ['hsla(41, 100%, 84%, 1)', 'hsla(341, 100%, 83%, 1)'],
		key: ['hsla(22, 24%, 91%, 1)', 'hsla(195, 93%, 64%,1)'],
	}[primaryColor];

	const pattern = {
		sprinkles: `"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='75' height='75' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='${combo[0]}'/><path d='M32.763-11.976c-1.05-.075-1.95.676-2.024 1.726L29.764.849c-.075 1.05.675 1.95 1.725 2.026 1.05.075 1.95-.675 2.025-1.725l.975-11.1c.075-1.05-.675-1.95-1.725-2.025zM54.299 1.32a1.912 1.912 0 0 0-.386.015c-.975.15-1.725 1.05-1.575 2.1l1.5 11.025c.15.975 1.05 1.725 2.1 1.575a1.732 1.732 0 0 0 1.575-2.1l-1.5-11.025c-.131-.853-.836-1.533-1.714-1.59zm-46.93 1.22a1.809 1.809 0 0 0-1.662 1.663c-.075 1.05.675 1.952 1.65 2.027l11.1 1.05c.975.15 1.95-.601 2.025-1.651.15-.975-.6-1.95-1.65-2.025l-11.1-1.05a1.643 1.643 0 0 0-.363-.015zM1.76 13.017a1.825 1.825 0 0 0-1.285.6l-7.65 8.101c-.75.75-.675 1.95.075 2.625s1.95.674 2.625-.076l7.651-8.099c.75-.75.674-1.95-.076-2.625a1.785 1.785 0 0 0-1.34-.526zm75 0a1.825 1.825 0 0 0-1.285.6l-7.65 8.101c-.75.75-.675 1.95.075 2.625s1.95.674 2.625-.076l7.651-8.099c.75-.75.674-1.95-.076-2.625a1.785 1.785 0 0 0-1.34-.526zm-39.731 2.906a1.785 1.785 0 0 0-1.34.527l-7.95 7.723c-.75.675-.826 1.875-.076 2.625.675.75 1.875.752 2.625.077l7.95-7.725c.75-.675.826-1.875.076-2.625a1.825 1.825 0 0 0-1.285-.602zm24.639 18.928c-.24.02-.48.085-.705.197a1.903 1.903 0 0 0-.825 2.55l5.1 9.902a1.902 1.902 0 0 0 2.55.824c.975-.45 1.276-1.574.826-2.55l-5.1-9.9c-.395-.73-1.125-1.083-1.846-1.023zm-50.37-4.862a1.756 1.756 0 0 0-1.035.336c-.825.6-1.05 1.725-.524 2.625l6.15 9.223c.6.9 1.8 1.127 2.625.526.9-.6 1.124-1.8.524-2.624l-6.15-9.226a1.912 1.912 0 0 0-1.59-.86zm32.705 9.766c-.12-.006-.243 0-.365.019l-10.95 2.175c-1.05.15-1.725 1.126-1.5 2.176.15 1.05 1.126 1.725 2.176 1.5l10.95-2.175c1.05-.15 1.725-1.125 1.5-2.175a1.99 1.99 0 0 0-1.811-1.52zm4.556 12.195a1.932 1.932 0 0 0-1.845.949c-.45.9-.15 2.025.75 2.55l9.75 5.4c.9.45 2.025.15 2.55-.75.525-.9.15-2.025-.75-2.55l-9.75-5.4a1.958 1.958 0 0 0-.705-.199zM71.913 58c-1.05-.075-1.875.748-1.95 1.798l-.45 11.1c-.075 1.05.75 1.876 1.8 1.95.975 0 1.875-.75 1.95-1.8l.45-11.1c.075-1.05-.75-1.873-1.8-1.948zm-55.44 1.08a1.865 1.865 0 0 0-1.035.42l-8.775 6.825c-.75.6-.9 1.8-.3 2.625.6.75 1.8.9 2.626.3l8.775-6.827c.75-.6.9-1.8.3-2.625a1.783 1.783 0 0 0-1.591-.72zm16.29 3.945c-1.05-.075-1.95.675-2.024 1.725l-.975 11.099c-.075 1.05.675 1.95 1.725 2.026 1.05.075 1.95-.675 2.025-1.725l.975-11.102c.075-1.05-.675-1.95-1.725-2.024z'  stroke-width='1' stroke='none' fill='${combo[1]}'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"`,
		waves: `"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(3) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='${combo[0]}'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='2' stroke='${combo[1]}' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"`,
	}[type ?? 'waves'];

	return pattern;
};

const StyledWrapper = styled('div')<PageHeaderBlockProps>(({color = 'magenta'}) => css`
	&::after {
		content: '';
		background-color: blue;
		background-image: url(${generatePattern(color)});
		display: flex;
		height: 5rem;
		width: 100%;
	}
`);

const Wrapper = styled(Block)<PageHeaderBlockProps>(({
	color = 'magenta',
}) => css`
		--wrapper-padding-bottom: 6rem;

		@media screen and (min-width: 1123px) {
			--wrapper-padding-bottom: 5rem;
		}

		background-color: var(--color-brand-${color}-lightest);
		margin-top: calc(5rem - 10rem);
		border-top: unset;
		border-right: unset;
		border-left: unset;

		padding-bottom: var(--wrapper-padding-bottom);
		height: 100%;

		.PageHeaderBlock-container {
			position: relative;
		}

		.Heading-root,
		.Text-root {
			color: var(--color-brand-tertiary-darker);
		}
	`,
);

const HeaderImage = styled('img')`
	width: 100%;
	max-width: 40rem;
	display: block;
	margin-bottom: -12rem;
	padding: 3rem; // TODO: shouldn't be applied to all images

	@media screen and (min-width: 600px) {
		float: right;
	}

	@media screen and (min-width: 768px) {
		margin-top: -2.5rem;
	}

	@media screen and (min-width: 1027px) {
		margin-top: -5rem;
		margin-right: -2.5rem;
	}

	@media screen and (min-width: 1123px) {
		position: absolute;
		inset: 100% 0 auto auto;
		margin-top: -15rem;
		max-width: 35rem;
	}

	@media screen and (min-width: 1200px) {
		max-width: 40rem;
	}
`;

const Content = styled('hgroup')`
	max-width: 40rem;
`;

export const PageHeaderBlock: FC<PageHeaderBlockProps> = ({
	title, description, color, ImageProps,
}) => (
	<StyledWrapper color={color}>
		<Wrapper color={color}>
			<Container className='PageHeaderBlock-container'>
				<Content>
					<Heading hasMargin level={1}>
						<Mark brand>{title}</Mark>
					</Heading>
					<Text>{description}</Text>
				</Content>
				{ImageProps && <HeaderImage {...ImageProps}/>}
			</Container>
		</Wrapper>
	</StyledWrapper>
);

PageHeaderBlock.displayName = 'PageHeaderBlock';
