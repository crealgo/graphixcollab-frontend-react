import { StoryObj, type StoryFn } from '@storybook/react';
import { generateOptions } from '@utils/chance';
import {
  InteractiveSelector,
  type InteractiveSelectorProps,
} from '@components/InteractiveSelector';

export default {
  component: InteractiveSelector,
};

export const Default: StoryObj<InteractiveSelectorProps> = {
  args: {
    options: generateOptions(),
  },
};
