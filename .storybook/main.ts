import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push(
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules|src/,
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][ext]',
        },
      }
    );
    return config;
  }
};
export default config;