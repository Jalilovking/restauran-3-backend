const PG = require('../../lib/postgres')


class Catagories extends PG {
    Catagories(){
        return this.fetchAll(`
            SELECT
                *
            FROM
                catagories
        `)
    }
}

module.exports = new Catagories()