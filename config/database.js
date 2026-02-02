const path = require("path");
module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");
  const connections = {
    postgres: {
      connection: {
        host: env("PGHOST", "127.0.0.1"),
        port: env.int("PGPORT", 5432),
        database: env("PGDATABASE", "strapi"),
        user: env("PGUSER", "strapi"),
        password: env("PGPASSWORD", "password"),
        ssl: env.bool(true),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
