import styled from '@emotion/styled';

export const FormGrid = styled.form`
	--content-grid-padding-block-end: 50%;
	--action-stack-spacing: 1rem;
	--max-content-width: 50rem;

	@media screen and (min-width: 425px) {
		--content-grid-padding-block-end: 52%;
	}

	@media screen and (min-width: 768px) {
		--content-grid-padding-block-end: 6.5rem;
	}

	@media screen and (min-width: 911px) {
		--content-grid-padding-block-end: 5rem;
	}

	@media screen and (min-width: 1024px) {
		--content-grid-padding-block-end: 3rem;
	}

	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
	gap: 1rem;

	max-width: var(--max-content-width);
	padding-block-end: var(--content-grid-padding-block-end);

	.FormHeader-root,
	.FormSectionTitle-root,
	.ActionStack-root {
		grid-column: span 6;
	}

	.FormSectionTitle-root:nth-of-type(n + 1) {
		margin-top: var(--spacing-10);
	}

	.ActionStack-root {
		margin-top: var(--spacing-6);
	}

	// fields
	.FormControl-root {
		grid-column: span 6;

		@media screen and (min-width: 500px) {
			grid-column: span 3;
		}

		&.FileInputField-root {
			grid-column: span 6;
		}

		&.FormControl-id-terms {
			margin-top: var(--spacing-6);
			grid-column: span 6;
		}
	}
`;
