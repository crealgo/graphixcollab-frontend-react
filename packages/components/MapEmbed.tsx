import styled from '@emotion/styled';
import {type FC} from 'react';

const EmbedWrapper = styled.div`
	border-radius: var(--shape-rounding-medium);
	border: var(--input-border-composite);
	overflow: hidden;
	aspect-ratio: 1.5/1;

	iframe {
		border: none;
	}
`;

const embedURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.641513742608!2d-118.27887552413037!3d34.027411719040686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7e78971cf9b%3A0xd7054efddbfffefe!2sGRAPHIX%20COLLAB!5e0!3m2!1sen!2sus!4v1737502238977!5m2!1sen!2sus';

export const MapEmbed: FC = () => (
	<EmbedWrapper>
		<iframe
			title='google-embed'
			src={embedURL}
			width='100%'
			height='100%'
			sandbox='allow-scripts allow-popups'
			// Sandbox='allow-scripts allow-popups'
			// allowfullscreen=''
			// loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
		/>
	</EmbedWrapper>
);
