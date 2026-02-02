module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "eI1MAO4jwqTBpOkxDwGuTA==",
      "vTMANj/JtLFo1rpTWRozpw==",
      "2ohAco31EzWLK4crO2wZ7Q==",
      "OAydPqSIZJcKvA4QUemqGQ==",
    ]),
  },
});
