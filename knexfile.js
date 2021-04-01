require('dotenv').config()
const pg = require('pg')
pg.defaults.ssl = true

module.exports = {
    client: 'postgresql',
    connection: {
      connectionString :`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
      ssl: { rejectUnauthorized: false },
    },
    migrations :{
      tableName: 'knex_migration',
      directory: `${__dirname}/database/migrations` 
    }
  }