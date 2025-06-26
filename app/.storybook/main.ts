import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    const svgr = (await import('vite-plugin-svgr')).default;
    config.plugins = config.plugins ?? [];
    config.plugins.push(svgr());
    return config;
  },
};

export default config;
