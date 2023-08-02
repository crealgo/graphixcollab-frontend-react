import styled from '@emotion/styled';

export const Wrapper = styled.section`
	box-sizing: border-box;
	display: flex;
	padding-block: var(--section-desktop-padding-block) 10rem;
	padding-inline: var(--section-desktop-padding-inline);
	background-color: var(--color-background);

	position: relative;
	overflow: hidden;

	.container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		position: relative;

		display: grid;
		grid-template-columns: repeat(2, minmax(0, 700px));
		gap: 2.5rem;
	}

	.carousel {
		position: absolute;
		inset: 0;
	}

	.carousel-slide {
		position: absolute;
		inset: 0;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-image: var(--data-image);
			background-size: cover;
			background-position: center;
			opacity: 0.25;
		}
	}

	.carousel-slide, .carousel-control-button {
		&-1, &-5 {
			background-color: var(--sequence-color-0-lighter);
			color: var(--sequence-color-0-dark);
		}

		&-2, &-6 {
			background-color: var(--sequence-color-1-lighter);
			color: var(--sequence-color-1-dark);
		}

		&-3, &-7 {
			background-color: var(--sequence-color-2-lighter);
			color: var(--sequence-color-2-dark);
		}

		&-4, &-8 {
			background-color: var(--sequence-color-3-lighter);
			color: var(--sequence-color-3-dark);
		}
	}

	.carousel-titles {
		position: absolute;
		bottom: var(--section-desktop-padding-block);
		left: var(--section-desktop-padding-inline);

		display: flex;
		gap: 0.25rem;
		align-items: center;
	}

	.carousel-control-button {
		opacity: 0.25;
		background: transparent;
		border: unset;
		font-size: 2rem;
		cursor: pointer;

		&:hover {
			opacity: 1 !important;
		}
	}
`;
