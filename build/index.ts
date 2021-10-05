import webpack from 'webpack';
import devConfig from './dev.config';

const main = () => {
  console.log('process.env', process.env);
  webpack(devConfig, (err?: Error, stats?) => {
    console.log('error', err);
  });
};

main();
