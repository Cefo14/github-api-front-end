const withImages = require('next-images');

const { BASE_PATH = '' } = process.env;

module.exports = withImages({
  basePath: BASE_PATH,
  webpack(config) {
    return config;
  },
});
