import * as webpack from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import commonConfig from "./webpack.common";
import {CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";

const config: webpack.Configuration = merge(commonConfig, {
    mode: "production",
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
                commons: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
            }
        }
    },
    plugins: [new CleanWebpackPlugin()]
});

export default config;
