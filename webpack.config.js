const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
      filename: 'index.html',
      inject: 'body'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
    {
        from:'./images',
        to:'images'
    } 
]);

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
}