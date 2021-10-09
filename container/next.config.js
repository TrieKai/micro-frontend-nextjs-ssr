const { withModuleFederation } = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      mergeRuntime: true,
      name: "container",
      library: { type: config.output.libraryTarget, name: "container" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        // For SSR, resolve to disk path (or you can use code streaming if you have access)
        app1: isServer
          ? path.resolve(
              __dirname,
              "../app1/.next/server/static/runtime/remoteEntry.js"
            )
          : "app1", // for client, treat it as a global
        app2: isServer
          ? path.resolve(
              __dirname,
              "../app2/.next/server/static/runtime/remoteEntry.js"
            )
          : "app2", // for client, treat it as a global
      },
      exposes: {},
      shared: [],
    };

    config.cache = false;
    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  },
};
