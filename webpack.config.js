const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = env => {
    return {
        // IGNORING NODE MODULES AND NATIVE CODE
        target: 'web',

        // CONFIGS
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true,
            writeToDisk: true
        },
        module: {
            rules: [
                //{ test: /\.(png|jpe?g|gif)$/i, use: 'file-loader'},
                { test: /\.(md)/, use: "raw-loader" },
                { test: /\.(js)|.(jsx)$/, use: 'babel-loader' },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader',] },
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
            }),
            new CopyPlugin([
                { from: './doc/assets', to: './slides/assets/' },
            ])
        ],
        watch: true,
    }
}