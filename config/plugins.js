// path: ./config/plugins.js

module.exports = {
  // ...
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 15 * 1024 * 1024 * 1024 // 15 GB
      }
    }
  }
};
