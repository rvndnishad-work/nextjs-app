const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack: (config, dev) => {
    // Fixes npm packages that depend on `fs` module
    if (dev) {
      config.devtool = "cheap-module-source-map";
    }
    config.node = {
      fs: "empty"
    };
    return config;
  },
  exportPathMap: () => {
    return {
      "/": { page: "/" }
    };
  }
});
