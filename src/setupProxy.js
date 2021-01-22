const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/recruitment/trucktimeline.json", {
      target: "https://nexogenshares.blob.core.windows.net",
      changeOrigin: true,
    })
  );
};
