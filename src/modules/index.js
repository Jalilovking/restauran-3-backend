const express = require('express')
const router = express.Router()


const Catagories = require('./catagories/catagories')
const Restaurans = require('./restaurans/restaurans')
const Foods = require('./foods/foods')
const Order = require('./order/order')
const Cart = require('./basket/basket')

router
    .get('/', Catagories.Catagories)
    .get('/catagory/:catagoryID', Restaurans.Restaurans)
    .get('/sub_catagory/:restauranID', Foods.Foods)  
    .post('/order', Order.Order)
    .get('/cart', Cart.GetCart)
    .post('/cart', Cart.addCart)
    .put('/cart', Cart.IncreaseCart)
    .delete('/cart', Cart.DeleteCart)
    

module.exports = router