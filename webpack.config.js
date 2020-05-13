const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

const getPlugins = () => {
    const plugins = [
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.html`,
            filename: 'index.html',
            inject: true,
            hash: true,
            chunks: ['tree'],
            meta: {
                charset: 'UTF-8',
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        }),
    ];

    return plugins;
};

module.exports = {
    mode: 'development',
    entry: {
        tree: './src/index.js'
    },
    output: {
        path: PATHS.dist,
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.ged$/i,
                use: 'raw-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/i,
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                node_vendors: {
                    test: /node_modules/,
                    name: 'node_vendors',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 8080,
        open: false,
        writeToDisk: true
    },
    plugins: getPlugins()
};
