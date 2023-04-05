import {ActionStack} from '@components/ActionStack';
import {type Action} from '@global/generalTypes';
import {Link} from '@mui/material';
import {styled} from '@mui/material/styles';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';
import {Text} from './Text';

export interface SocialMediaBlockProps extends ComponentPropsWithoutRef<'div'> {
	text?: string;
	url?: string;
	actions?: Action[];
}

const SocialMediaBlockWrapper = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '0.75rem'
});

export const SocialMediaBlock: FC<SocialMediaBlockProps> = ({className, url, text, actions, ...props}) => (
	<SocialMediaBlockWrapper className={clsx(className, 'SocialMediaBlock-root')}>
		<Text>
			<Link variant='body2' className={clsx(className, 'SocialMediaBlock-link')} href={url}>
				{text}
			</Link>
		</Text>
		<ActionStack color='secondary' actions={actions} />
	</SocialMediaBlockWrapper>
);
