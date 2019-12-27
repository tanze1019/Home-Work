
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://restapi.amap.com',
      changeOrigin: true,
      pathRewrite:{
          "^api":"/"
      }
    })
  );
};