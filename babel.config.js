const { Platform } = require("react-native");

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  Platform: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      }
    ]
  ]
};
