const knex = require('../../database')

export default function users(req, res) {
    knex('users').then((results) => res.json(results)) 
}
