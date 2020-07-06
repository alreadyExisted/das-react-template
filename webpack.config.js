const path = require('path')
const webpack = require('webpack')
const Html = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const crypto = require('crypto')

const IS_DEV = process.env.NODE_ENV !== 'production'
const TS_CONFIG = path.resolve(__dirname, './tsconfig.json')

const devOnly = list => (IS_DEV ? list : [])
const prodOnly = list => (!IS_DEV ? list : [])

/** @type { webpack.Configuration } */
const config = {
  entry: {
    app: './src'
  },

  context: path.resolve(__dirname),

  mode: IS_DEV ? 'development' : 'production',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: IS_DEV ? '[name].js' : '[name].[contenthash:8].js',
    chunkFilename: IS_DEV ? '[name].chunk.js' : '[name].[contenthash:8].chunk.js',
    publicPath: '/',
    pathinfo: false
  },

  resolve: {
    // @ts-ignore
    plugins: [new TsconfigPathsPlugin({ configFile: TS_CONFIG })],
    extensions: ['.tsx', '.ts', '.js'],
    alias: IS_DEV ? { 'react-dom': '@hot-loader/react-dom' } : {}
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [['@babel/env', { modules: false }], '@babel/typescript', '@babel/react'],
              plugins: [
                'react-require',
                ['@babel/transform-runtime', { corejs: 3 }],
                ...devOnly(['react-hot-loader/babel'])
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /^\?raw$/,
            use: [IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            use: [
              IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  localsConvention: 'camelCase',
                  modules: {
                    localIdentName: IS_DEV ? '[local]--[hash:base64:5]' : '[hash:base64:5]'
                  },
                  importLoaders: 1,
                  sourceMap: IS_DEV
                }
              },
              'postcss-loader'
            ]
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 64000,
              name: 'images/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              emitFile: true,
              limit: 8092,
              name: 'images/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ForkTsCheckerPlugin({
      eslint: {
        enabled: true,
        files: './src/**/*.{ts,tsx,js,jsx}'
      },
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        }
      }
    }),

    new MiniCssExtractPlugin(),

    new CopyPlugin({ patterns: [{ from: 'locales', to: 'locales' }] }),

    new Html({
      template: 'views/index.html',
      templateParameters: {
        dev: IS_DEV
      }
    }),

    new webpack.DefinePlugin({
      IS_DEV,
      BUILD_ID: JSON.stringify(crypto.randomBytes(8).toString('hex'))
    }),

    ...devOnly([new WebpackBar()]),

    ...prodOnly([
      new webpack.optimize.ModuleConcatenationPlugin(),
      new CompressionPlugin({}),
      new OptimizeCssAssetsPlugin()
    ])
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'common'
    },

    minimize: !IS_DEV
  },

  devServer: {
    // @ts-ignore
    port: process.env.PORT || 3000,
    hot: true,
    historyApiFallback: {
      index: '/'
    }
  }
}

module.exports = config
