let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/assets/js/app.js', 'public/js')
    .setPublicPath('public')
    .extract(['vue','vuex','vuetify','vue-router','vee-validate','vue-resource','vuetify/dist/vuetify.min.css'])
	.webpackConfig({output: {publicPath:'',chunkFilename: mix.inProduction() ? 'js/chunks/[name].chunk.[chunkhash].js' : 'js/chunks/[name].chunk.js'}})
    .disableNotifications();
if (mix.inProduction()) {
    mix.version();
}