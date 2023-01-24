// path: ./config/plugins.js

module.exports = {
  // ...
  upload: {
    config: {
      providerOptions: {
        //10* 1gb in bytes
        sizeLimit: 10 * 1024 * 1024 * 1024,
      },
    },
  },
};
  