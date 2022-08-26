const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/allglobaldocuments", {
      target: "https://investmentportal.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/getrecordbyid", {
      target: "https://investmentportal.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/dealswithuserid", {
      target: "https://investmentportal.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/documentswithdealsid", {
      target: "https://investmentportal.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/getrecord", {
      target: "https://investmentportal.herokuapp.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/accesstoken", {
      target: "https://investmentportal.herokuapp.com",
      changeOrigin: true,
    })
  );
};
