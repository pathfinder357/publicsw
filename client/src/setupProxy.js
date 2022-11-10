const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            //target: 'http://:5000',
            target: 'http://121.88.141.80:5000',
            changeOrigin: true,
        })
    );
};