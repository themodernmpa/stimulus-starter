/**
 * NOTE: changes to this file require the server to be restarted.
 */

const path = require("path")
const express = require("express")
const webpack = require("webpack")
const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")

const app = express()
const publicPath = path.join(__dirname, "public")
const port = process.env.PORT || 9000

app.use(express.static(publicPath))
app.use(webpackMiddleware(webpack(webpackConfig)))

app.get('/slow', (req, res) => {
  // introduce an artifial delay
  var start = Date.now()
  while (Date.now() - 2000 < start) { }
  res.redirect('slow.html')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
