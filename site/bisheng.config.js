const themeConfig = require('./themeconfig');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  port: 8320,
  hash: true,
  theme: './site/theme',
  output: './_site',
  source: './site/posts',
  themeConfig,
  htmlTemplate: './site/theme/static/template.html',
  webpackConfig(config) {
    if(isDev) {
      config.mode = 'development';
      config.devtool = 'source-map';
    }

    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    };

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  devServerConfig: {
    public: 'localhost',
  },
};