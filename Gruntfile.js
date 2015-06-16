var webpack = require('webpack');
var grunt = require('grunt');

grunt.loadNpmTasks('grunt-webpack');
grunt.loadNpmTasks('grunt-contrib-clean');

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json')
, clean: {
    js: ['./dist/js']
  }
, webpack: {
    build: {
      entry: './js/index.js'
    , output: {
        path: './dist/'
      , filename : 'js/bundle.min.js'
      }
    , devtool: '#source-map'
    , plugins: [
        new webpack.optimize.UglifyJsPlugin()
      ]
    }
  }
});

grunt.registerTask('default', ['clean:js', 'webpack:build']);
