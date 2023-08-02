import styled from '@emotion/styled';

export const Wrapper = styled.section`
	box-sizing: border-box;
	display: flex;
	padding-block: var(--section-desktop-padding-block);
	padding-inline: var(--section-desktop-padding-inline);
	background-color: var(--color-background);

	position: relative;
	overflow: hidden;

	.container {
		max-width: var(--container-max-width);
		margin-block: 0;
		margin-inline: 0 auto;
		position: relative;
	}

	.carousel {
		position: absolute;
		inset: 0;
	}

	.carousel-slide {
		position: absolute;
		inset: 0;

		.Image-root {
			opacity: 0.375;
		}
	}

	.carousel-titles {
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	.carousel-control-title {
		border: unset;

		font-family: var(--type-heading-font-family);
		font-size: var(--type-heading-font-size-large-3);
		font-weight: var(--type-heading-font-weight);

		opacity: 0.25;
		background: transparent;
		cursor: pointer;

		&:hover {
			opacity: 1 !important;
		}
	}
`;

export const ContentColumn = styled.div`
	max-width: 700px; /* TODO: make this a variable */
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
`;

export const Divider = styled.hr`
	padding: unset;
	margin: unset;
	border: unset;

	visibility: hidden;
	height: 0px;
`;
