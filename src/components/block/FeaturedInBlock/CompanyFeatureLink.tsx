import styled from '@emotion/styled';

export const CompanyFeatureLink = styled.a`
	display: inline-flex;
	place-content: center;
	place-items: center;

	aspect-ratio: 1 / 1;
	padding: 0.5rem;
	width: 15rem;
	margin: 0 0.5rem;
	filter: grayscale(100%);
	opacity: 0.5;
	transition: all 100ms ease-in-out;

	&:hover {
		opacity: 1;
		filter: grayscale(0%);
		transform: translateY(-3px);
	}
`;
