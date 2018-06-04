const path = require('path')

module.exports = {
  FIXTURES: path.join(__dirname, 'fixtures'),
  EXPECT: path.join(__dirname, 'expect'),
  DUMMY_BUNDLE_NAME: 'bundle.js',
  DUMMY_BUNDLE_SOURCEMAP_NAME: 'bundle.js.map'
}