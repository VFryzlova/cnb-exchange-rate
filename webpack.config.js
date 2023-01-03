const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: "./src/App.jsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
      ],
      module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', ['@babel/preset-react', {'runtime': 'automatic'}]]
                  }
                }
            },
        ]
    }
}