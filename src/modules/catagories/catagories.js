const model = require('./model')

module.exports = {
    Catagories: async(req, res) => {
        try {

            const catagories = await model.Catagories()

            res.status(200).send(catagories)

        } catch (error) {
            console.log(error)
        }
    }
}