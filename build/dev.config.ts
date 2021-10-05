import { Configuration as devServer } from 'webpack-dev-server';
import path from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './base.config';
import webpack, { Configuration } from 'webpack';

interface devConfigure extends Configuration {
  devServer: devServer;
}

const devConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __PRD__: 'false',
    }),
  ],
} as devConfigure);

export default devConfig;
