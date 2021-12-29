const HtmlWebpackPluging = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new HtmlWebpackPluging({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - You can find photos on pretty animals',
      short_name : 'Petgram 🐶',
      description: 'You can find photos on pretty animals',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 384, 512],
          purpose: 'maskable any'
        }
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://res.cloudinary.com|images.unsplash.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-doblesesays.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
