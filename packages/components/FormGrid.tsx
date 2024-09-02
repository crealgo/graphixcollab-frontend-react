import styled from '@emotion/styled';

export const FormGrid = styled.form`
	display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	gap: 1.25rem;

	.FormHeader-root,
	.FormSectionTitle-root,
	.ActionStack-root,
	.FormSection-alert,
	.FormControl-root {
		grid-column: span 12;
	}

	.FormSectionTitle-root:nth-of-type(n + 1) {
		margin-top: var(--spacing-10);
	}

	.ActionStack-root {
		margin-top: var(--spacing-6);
	}

	.FormControl-id-terms {
		margin-top: var(--spacing-6);
	}
`;
