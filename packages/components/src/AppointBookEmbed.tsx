import {type FC} from 'react';
import styled from '@emotion/styled';
import {Container} from './Container';

const AppointBookingEmbedWrapper = styled.div`
	width: 100%;
	height: 100%;

	iframe {
		border: none;
		width: 100%;
		min-height: 50rem;
	}
`;
export const AppointBookEmbed: FC = () => (
	<Container>
		<AppointBookingEmbedWrapper>
			{/* eslint-disable react/iframe-missing-sandbox */}
			<iframe
				title='Schedule with Graphix Collab'
				src='https://squareup.com/appointments/book/gyddlmedpd8xf/94H44SPS41D7K/start'
			/>
			{/* eslint-enable react/iframe-missing-sandbox */}
		</AppointBookingEmbedWrapper>
	</Container>
);
