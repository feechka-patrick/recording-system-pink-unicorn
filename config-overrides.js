const path = require('path');

module.exports = function override(config) {
  config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
  config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/styles');
  config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');
  config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages');
  config.resolve.alias['@router'] = path.resolve(__dirname, 'src/router');
  

  return config;
};
