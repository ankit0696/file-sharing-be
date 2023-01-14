// path: ./config/plugins.js

module.exports = {
    // ...
    upload: {
      config: {
        providerOptions: {
            // 1gb in bytes
          sizeLimit: 1024 * 1024 * 1024,
        }
      }
    }
  };
  