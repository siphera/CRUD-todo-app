// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/my_life'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + 'seeds',
    }
  }

};
