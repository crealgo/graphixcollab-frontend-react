import { expect, test } from '@playwright/experimental-ct-react';
import { Estimator } from './index';

test('should render properly', async ({ mount }) => {
	const component = await mount(<Estimator />);

	await expect(component).toContainText('Get a quick');
});
