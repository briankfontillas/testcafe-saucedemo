require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
  ],
});

module.exports = {
  // TestCafe configuration goes here
};
