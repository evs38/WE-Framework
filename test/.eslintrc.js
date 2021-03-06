/* eslint-env node */
module.exports = {
  globals: {
    describe: true,
    it: true,
  },
  rules: {
    'react/jsx-no-bind': 0,
    'react/no-find-dom-node': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [ 'src', 'test', 'node_modules' ],
      },
    },
  },
};
