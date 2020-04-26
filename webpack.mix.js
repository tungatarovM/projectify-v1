const mix = require('laravel-mix');

mix.react('resources/js/index.js', 'public/js/app.js')
   .sass('resources/sass/app.scss', 'public/css').webpackConfig({
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchOptions: {
      poll: true
    }
  }
});
