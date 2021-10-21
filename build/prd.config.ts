import { merge } from 'webpack-merge';
import baseConfig from './base.config';
import webpack, { Configuration } from 'webpack';

export default merge(baseConfig, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: 'false',
    }),
  ],
} as Configuration);
