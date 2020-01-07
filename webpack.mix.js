const mix = require('laravel-mix');

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
/*mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');*/

    mix.webpackConfig({
        module : {
            rules : [{
                test: /\.scss$/,
                use : [{
                    loader: 'sass-loader',
                    options : {
                        includePaths: ['node_modules', 'node_modules/@material/*'].map((d) => path.join(__dirname, d))
                    }
                }]
            }]
        }
    }).js('app/source/demo.js', 'app/build').sourceMaps(false, 'source-map');
