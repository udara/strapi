module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: 'DO00XTGUBPZK9XEUD3AY',
        secret: 'HFoRH8gZwwcuCth+cD4uJd4lhLZHdiBRCOK7sFPX178',
        endpoint: 'https://udara-strapi-test.syd1.digitaloceanspaces.com',
        space: 'udara-strapi-test',
        directory: "media", // optional
      },
    },
  },
  // ...
});
