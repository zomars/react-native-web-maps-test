module.exports = function override(config, env) {
  config.resolve = {
    'alias': {
      'react-native': 'react-native-web',
      'react-native-maps': 'react-native-web-maps',
    }
  }

  return config;
}
