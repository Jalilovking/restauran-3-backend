const PG = require('../../lib/postgres')


class Foods extends PG {
    Foods($1){
        return this.fetchAll(`
            SELECT 
                *
            FROM
                foods
            INNER JOIN
                restaurans
            using
                (restauran_id)
            where
                restauran_id = $1
        `, $1)
    }
}

module.exports = new Foods()