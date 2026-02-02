module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
      register: {
        allowedFields: [
          "name",
          "firstname",
          "lastname",
          "expoPushToken",
          "nuxeoId",
          "notifications",
        ],
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "expo-notifications": {
    enabled: true,
    // resolve: "./src/plugins/expo-notifications",
    config: {
      testToken: "ExponentPushToken[WP9WjkMh9ExLp8MwNqEb9R]",
      // customFieldName: "expoPushToken",
    },
  },
});
