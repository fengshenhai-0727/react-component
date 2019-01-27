// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require("path");

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    extensions: [
      ".mjs",
      ".web.ts",
      ".ts",
      ".web.tsx",
      ".tsx",
      ".web.js",
      ".js",
      ".json",
      ".web.jsx",
      ".jsx"
    ]
  },
  module: {
    rules: [
      // add your custom rules.
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            include: path.resolve(__dirname, "../src"),
            loader: require.resolve("ts-loader")
          },
          {
            test: /\.scss$/,
            use: [{
              loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
              loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            },
            {
              loader: "sass-loader"
            }]
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.ejs$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};
