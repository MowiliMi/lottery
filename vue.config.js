/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
const { name, version } = require('./package.json');
const isEnvProd = process.env.NODE_ENV === 'production' ? true : false;

const config = {
  css: {
    extract: true,
  },
  productionSourceMap: isEnvProd ? false : true,
  runtimeCompiler: true,
  pluginOptions: {
    webpackBundleAnalyzer: {
      analyzerMode: isEnvProd ? 'disabled' : 'static',
      openAnalyzer: false,
    },
  },
  configureWebpack: {
    output: {
      filename: 'js/[id].[hash:12].js',
      chunkFilename: 'js/[id].[hash:12].js',
    },
    resolve: {
      alias: {
        '@/*': ['src/*'],
        '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/plugins/module/antdIcons.ts'),
        '@api': path.resolve(__dirname, 'src', 'api'),
        '@assets': path.resolve(__dirname, 'src', 'assets'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@environment': path.resolve(__dirname, 'src', 'environment'),
        '@filters': path.resolve(__dirname, 'src', 'filters'),
        '@locales': path.resolve(__dirname, 'src', 'locales'),
        '@plugins': path.resolve(__dirname, 'src', 'plugins'),
        '@routers': path.resolve(__dirname, 'src', 'routers'),
        '@stores': path.resolve(__dirname, 'src', 'stores'),
        '@types': path.resolve(__dirname, 'src', 'types'),
        '@views': path.resolve(__dirname, 'src', 'views'),
      },
      extensions: ['.ts', '.tsx', '.vue', '.json'],
    },
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    ],
  },

  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(800000).maxAssetSize(800000);
    config.resolve.symlinks(false);
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap((options) => {
        return options;
      });
    config.plugins.delete('named-chunks');
    config.plugin('prefetch').tap((options) => options);
    config.plugin('extract-css').tap(() => [
      {
        filename: 'css/[id].[hash:12].css',
        chunkFilename: 'css/[id].[hash:12].css',
      },
    ]);

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('file-loader')
      .tap((options) => {
        options.name = 'img/[hash:12].[ext]';
        return options;
      });

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach((type) => {
      config.module
        .rule('less')
        .oneOf(type)
        .use('less-loader')
        .tap((options) =>
          Object.assign({}, options, {
            lessOptions: {
              javascriptEnabled: true,
            },
          }),
        );
    });
  },
  pwa: {
    assetsVersion: version,
    name: name,
    theme_color: '#ffffff',
    background_color: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#ffffff',
    manifestPath: 'manifest.json',
    manifestCrossorigin: 'use-credentials',
    manifestOptions: {
      start_url: '/index.html',
      display: 'standalone',
      icons: [],
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};

module.exports = { ...config };
