const PG = require('../../lib/postgres')


class Order extends PG {
    order($1, $2, $3){
        return this.fetchAll(`
            INSERT INTO
                users(user_name, address, user_email)
            VALUES
                ($1, $2, $3)
        `, $1, $2, $3)
    }
}

module.exports = new Order()