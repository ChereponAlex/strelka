const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: path.resolve(__dirname, "src", "public", "js", "main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                rules: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                            "plugins": [
                                ["@babel/transform-runtime"]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [

                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new MiniCssExtractPlugin({
            insert: "styles.css",
            filename: "styles.css"
        })
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};