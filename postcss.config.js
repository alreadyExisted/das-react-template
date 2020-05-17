const path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {
      path: [path.join(__dirname, './src/theme')]
    },
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, './src/theme/mixins')
    },
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      },
      importFrom: path.join(__dirname, './src/theme/vars.css')
    },
    'postcss-inline-svg': {},
    'postcss-svgo': {}
  }
}
