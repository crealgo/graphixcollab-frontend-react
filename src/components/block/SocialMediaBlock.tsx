import {ActionStack} from '../base/ActionStack';
import {type Action} from '../../types/general';
import {Link} from '@mui/material';
import {styled} from '@mui/material/styles';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {Text} from '../base/Text';

export type SocialMediaBlockProps = {
	text?: string;
	url?: string;
	actions?: Action[];
} & ComponentPropsWithoutRef<'div'>;

const SocialMediaBlockWrapper = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '0.75rem',
});

export const SocialMediaBlock: FC<SocialMediaBlockProps> = ({
	className,
	url,
	text,
	actions,
}) => (
	<SocialMediaBlockWrapper
		className={clsx(className, 'SocialMediaBlock-root')}
	>
		<Text>
			<Link
				variant='body2'
				className={clsx(className, 'SocialMediaBlock-link')}
				href={url}
			>
				{text}
			</Link>
		</Text>
		<ActionStack color='secondary' actions={actions}/>
	</SocialMediaBlockWrapper>
);
