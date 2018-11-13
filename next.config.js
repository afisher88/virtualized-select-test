const dev = process.env.NODE_ENV !== 'production';
const withCSS = require('@zeit/next-css');
const assetPrefix = dev ? '' : '/virtualized-select-test/';

module.exports = withCSS(({
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix
  }
}))