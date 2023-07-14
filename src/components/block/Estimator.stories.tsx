import { type StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { QuickEstimateForm } from '../../forms/QuickEstimateForm';

export default {
	component: QuickEstimateForm
};

export const Default: StoryObj = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.type(canvas.getByLabelText('Name'), 'John Doe');

		const submit = canvas.getByText('Get Estimate');

		await userEvent.click(submit);
	}
};
