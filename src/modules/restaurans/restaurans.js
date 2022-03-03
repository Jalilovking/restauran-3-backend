const model = require('./model')

module.exports = {
    Restaurans: async(req, res) => {
        try {
            
            const { catagoryID } = req.params
            
            
            if(catagoryID){
                const restaurans = await model.catagoryRestaurans(catagoryID)
                res.send(restaurans)
                
            }

                        
            // res.send(await model.allRestaurans())

        } catch (error) {
            console.log(error)
        }
    }
}