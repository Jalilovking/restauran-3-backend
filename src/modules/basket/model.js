const PG = require('../../lib/postgres')


class Basket extends PG {
    BASKET($1){
        return this.fetch(`
            INSERT INTO 
                cart(food_name, food_price, food_img) 
            SELECT 
                food_name, food_price, food_img 
            FROM 
                foods 
            WHERE 
                food_id = $1
        `, $1)
    }
    ALLCART(){
        return this.fetchAll(`
            SELECT
                *
            FROM
                cart
        `)
    }
    INCREASECART($1){
        return this.fetch(`
            UPDATE
                cart
            SET
                count = count + 1
            where
                cart_id = $1
            RETURNING *
        `, $1)
    }
    DELETECART($1){
        return this.fetch(`
            DELETE FROM 
                cart
            WHERE
                cart_id = $1
            RETURNING *
        `, $1)
    }
}

module.exports = new Basket()