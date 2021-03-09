'use strict';

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "build.js"
    },
    devServer: {
        contentBase: './dist',
    },
}