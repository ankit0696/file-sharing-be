module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  // 'strapi::body',
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::body",
    // set limit to 15 gb
    config: { 
      maxLimit: 15 * 1024 * 1024 * 1024,
      formLimit: 15 * 1024 * 1024 * 1024,
      jsonLimit: 15 * 1024 * 1024 * 1024,
      textLimit: 15 * 1024 * 1024 * 1024,
      formidable: {
        maxFileSize: 15 * 1024 * 1024 * 1024,
      },
      includeUnparsed: true,
    },
  },
];
