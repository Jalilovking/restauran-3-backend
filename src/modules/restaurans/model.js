const PG = require('../../lib/postgres')


class Restaurans extends PG {
    allRestaurans(){
        return this.fetchAll(`
            SELECT
                *
            FROM
                restaurans
        `)
    }
    catagoryRestaurans($1){
        return this.fetchAll(`
            SELECT
                *
            FROM
                restaurans
            INNER JOIN
                catagories
            USING
                (catagory_id)
            WHERE
                catagory_id = $1
        `, $1)
    }
}

module.exports = new Restaurans()