module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'wongames_db'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'wongames_db'),
        username: env('DATABASE_USERNAME', 'wongames'),
        password: env('DATABASE_PASSWORD', 'wongames'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
