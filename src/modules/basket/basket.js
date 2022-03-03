const model = require('./model')

module.exports = {
    addCart: async(req, res) => {
        try {
            
            const { productID } = req.body

            console.log(productID)

            if(productID){
                const addCart = await model.BASKET(productID)
                res.send(addCart)

            }



        } catch (error) {
            console.log(error)
        }
    },
    GetCart: async(req, res) => {
        try {
            
            const allCart = await model.ALLCART()
            
            res.status(200).send(allCart)

        } catch (error) {
            console.log(err)
        }
    },
    IncreaseCart: async(req, res) => {
        try {
            
            const { productID } = req.body

            res.send(await model.INCREASECART(productID))

        } catch (error) {
            console.log(error)
        }

    },
    DeleteCart: async(req, res) => {
        try {
            
            const { productID } = req.body

            res.send(await model.DELETECART(productID))

        } catch (error) {
            console.log(error)
        }

    }
}