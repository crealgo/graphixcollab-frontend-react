import {type FC} from 'react';
import {type FeaturedCompanyInfo} from '../../../content/featured-companies';

export const FeaturedLogo: FC<FeaturedCompanyInfo> = props => (
	<figure
		style={{
			display: 'flex',
			height: '100%',
			width: 'inherit',
			placeItems: 'center',
			placeContent: 'center',
			margin: '0 0.5rem'
		}}
	>
		<img
			style={{
				objectFit: 'contain',
				...props.styleOverrides
			}}
			height="100%"
			width="100%"
			src={props.image}
			alt={props.name}
		/>
	</figure>
);
