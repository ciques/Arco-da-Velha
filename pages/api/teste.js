const knex = require('../../database')

export default function users(req, res) {
    return new Promise((resolve, reject) => {
        knex('users')
            .then(results => {
                res.json(results)
                resolve();
            })
            .catch(err => {
                res.json(err);
                res.status(405).end();
                return resolve()
            })
    })
}
