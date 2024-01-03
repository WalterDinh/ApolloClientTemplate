module.exports = function getBabelConfig(api) {
  api.cache(true);

  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),

      {
        root: ['./app/'],

        alias: {
          '~': './app',
          '~components': './app/components',
          '~hooks': './app/hooks',
          '~config': './app/config',
          '~helpers': './app/helpers',
          '~apollo': './app/apollo',
          '~models': './app/models',
          '~module': './app/module',
          '~navigation': './app/navigation',
          '~localization': './app/localization',
          '~assets': './app/assets',
        },
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
    // 'react-native-reanimated/plugin'
  ];

  return {
    presets: [
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
    ],
    env: {
      production: {
        plugins: ['transform-remove-console', ...plugins],
      },
    },
    plugins,
  };
};
