import { type StoryObj } from '@storybook/react';
import { QuickEstimateForm } from '../../forms/QuickEstimateForm';
import { type EstimatorBlockProps } from './EstimatorBlock';
import { within, userEvent } from '@storybook/testing-library';

export default {
	component: QuickEstimateForm
};

export const Default: StoryObj<EstimatorBlockProps> = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.type(canvas.getByLabelText('Name'), 'John Doe');

		const submit = canvas.getByText('Get Estimate');

		await userEvent.click(submit);
	}
};
