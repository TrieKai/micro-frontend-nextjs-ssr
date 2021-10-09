const { withModuleFederation } = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      mergeRuntime: true,
      name: "app2",
      library: { type: config.output.libraryTarget, name: "app2" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {},
      exposes: { "./index": "./pages/index" },
      shared: [],
    };

    config.cache = false;
    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    if (!isServer) {
      config.output.publicPath = "http://localhost:3002/_next/";
    }

    return config;
  },
};
