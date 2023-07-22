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

export const MapEmbed: FC = () => (
	<EmbedWrapper>
		{/* eslint-disable react/iframe-missing-sandbox */}
		<iframe
			title='google-embed'
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.643569104135!2d-118.27879712514893!3d34.027358973166265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7e7881aa24d%3A0x44058a082ba5069e!2sFashion%20Greek%20USC!5e0!3m2!1sen!2sus!4v1681753959240!5m2!1sen!2sus'
			width='100%'
			height='100%'
			// sandbox='allow-scripts allow-popups'
			// allowfullscreen=''
			// loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
		/>
		{/* eslint-enable react/iframe-missing-sandbox */}
	</EmbedWrapper>
);
