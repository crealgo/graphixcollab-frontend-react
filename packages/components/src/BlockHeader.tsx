import {ActionStack} from './ActionStack';
import {Heading} from './Heading';
import {type SharedBlockProps} from '../../types/general';
import Typography from '@mui/material/Typography';
import {type FC} from 'react';
import {Container} from './Container';
import {styled} from '@mui/material/styles';
import {Text} from './Text';

type BlockHeaderProps = SharedBlockProps & {
	/**
	 * The title of the block.
	 *
	 * @default 2;
	 */
	readonly level?: 1 | 2;
};

const StyledHGroup = styled('hgroup')`
	display: grid;
	gap: 1rem;

	.Container-root {
		margin-left: 0;
	}
`;

export const BlockHeader: FC<BlockHeaderProps> = props => (
	<StyledHGroup>
		{props.subtitle && (
			<Typography variant='overline'>{props.subtitle}</Typography>
		)}
		{props.title && (
			<Heading level={props.level ?? 2}>{props.title}</Heading>
		)}
		{props.description && (
			<Container size='small'>
				<Text size='large'>{props.description}</Text>
			</Container>
		)}
		{props.actions && (
			<ActionStack color='secondary' actions={props.actions}/>
		)}
	</StyledHGroup>
);
