module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transformIgnorePatterns: [`/node_modules/(?!vue-apollo-decorator)`, '@api'],
  // testEnvironment: 'node',
};
