import {type FC} from 'react';
import styled from '@emotion/styled';
import {Container} from '../base/Container';

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
				title="Schedule with Fashion Greek, USC"
				src="https://squareup.com/appointments/book/pgkiyyqcz8g07b/LAR1DB5CED0WQ/start"
			/>
			{/* eslint-enable react/iframe-missing-sandbox */}
		</AppointBookingEmbedWrapper>
	</Container>
);
