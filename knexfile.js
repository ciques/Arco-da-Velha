// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'admin',
      password : 'younnergust',
      database : 'arco_local'
    },
    migrations :{
      tableName: 'knex_migration',
      directory: `${__dirname}/database/migrations` 
    }
  },
};
