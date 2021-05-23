import * as webpack from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import commonConfig from "./webpack.common";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";
import path from "path";

const config: webpack.Configuration = merge(commonConfig, {
    mode: "production",
    output: {
        path: path.join(__dirname, "../build"),
        filename: "index_bundle.js",
        publicPath: "/Calculator"
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
    },
    plugins: [new CleanWebpackPlugin()]
});

export default config;
