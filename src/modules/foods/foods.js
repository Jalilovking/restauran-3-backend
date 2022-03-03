const model = require('./model')

module.exports = {
    Foods: async(req, res) => {
        try {
            
            const { restauranID } = req.params


            if(restauranID){
                const foods = await model.Foods(restauranID)
                res.send(foods)

            }


        } catch (error) {
            console.log(error)
        }
    }
}