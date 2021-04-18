const withImages = require('next-images');

const {
  BASE_PATH = '',
  ASSET_PREFIX = '',
} = process.env;

module.exports = withImages({
  basePath: BASE_PATH,
  assetPrefix: ASSET_PREFIX,
  webpack(config) {
    return config;
  },
});
