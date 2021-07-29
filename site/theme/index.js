// const path = require('path');

module.exports = {
  lazyLoad: true,
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    '@ant-design/bisheng-plugin?injectProvider',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: [{
    path: '/',
    component: './template/Home',
  }],
};