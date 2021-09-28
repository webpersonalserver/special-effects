const { override, adjustStyleLoaders, addWebpackPlugin } = require("customize-cra")
const { ProvidePlugin } = require('webpack')

module.exports = override(
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "./src/static/css/common.scss"
        }
      })
    }
  }),
  addWebpackPlugin(
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  )
)