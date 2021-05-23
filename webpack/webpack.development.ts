import * as webpack from "webpack";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";
import path from "path";

const config: webpack.Configuration = merge(commonConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        open: true,
        historyApiFallback: true,
        port: 3000
    },
    output: {
        path: path.join(__dirname, "../build"),
        filename: "index_bundle.js",
        publicPath: "/"
    }
});

export default config;
