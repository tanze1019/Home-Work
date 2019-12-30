const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://vueshop.glbuys.com',
      changeOrigin: true,
      pathRewrite:{
          "^api":"/"
      }
    })
  );
};