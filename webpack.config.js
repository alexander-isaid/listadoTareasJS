const HtmlWebPackPlugin       = require('html-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebPackPlugin       = require('copy-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {

    //mode: 'production',
    mode: 'development',
    optimization:{
        minimizer: [ new OptimizeCssAssetsPlugin()]
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                loader:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                loader:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize:false
                },
                
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false
                }

            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyWebPackPlugin({
            patterns: [
                {from: 'src/assets', to:'assets'}
            ]
        }),
        new CleanWebpackPlugin(),
                    
    ]
                    

}