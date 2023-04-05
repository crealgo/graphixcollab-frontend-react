import { StoryObj, type StoryFn } from '@storybook/react';
import { generateActions } from '@utils/chance';
import {
  InteractiveEstimator,
  type InteractiveEstimatorProps,
} from '@components/InteractiveEstimator';

export default {
  component: InteractiveEstimator,
};

export const Default: StoryObj<InteractiveEstimatorProps> = {
  args: {
    actions: generateActions(),
  },
};
