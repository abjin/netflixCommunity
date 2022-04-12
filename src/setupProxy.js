const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/home", {
      target: "http://localhost:3001/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/user", {
      target: "http://localhost:3001/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/post", {
      target: "http://localhost:3001/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/board", {
      target: "http://localhost:3001/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/search", {
      target: "http://localhost:3001/",
      changeOrigin: true,
    })
  );
};
