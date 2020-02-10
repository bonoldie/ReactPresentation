const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')


module.exports = env => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true,
          },
        module: {
            rules: [
                { test: /\.(js)|.(jsx)$/, use: 'babel-loader' },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader',] },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: './public/fonts'
                        }
                    }]
                }
            ]
        },
        mode: (env && env.dev) ? "development" : "production",
        plugins: [
            new htmlPlugin({
                template: './src/index.html'
            })
        ],
        watch: true
    }
}