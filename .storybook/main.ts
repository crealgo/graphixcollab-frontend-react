import { type StorybookConfig } from '@storybook/react-vite';
export default ({
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-mdx-gfm'],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: true
  }
} satisfies StorybookConfig);
