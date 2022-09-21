const express = require('express');
const products = require('../../data/products.json');

const router = express.Router();

router.get('/', (req,res)  => {
    const productsList = products;
    res.render('main', {products: productsList, productsOn: productsList.length})
});

router.post('/', (req,res)  => {
    const { name, price, url } = req.body;
    if( !name || !price || !url){
        return res.status(400).json({error: "Todos los campos deben estar completos!"})
    }
    const newProduct = {
        name,
        price,
        url,
        id: products.length + 1
    };
    products.push(newProduct);
    return res.redirect('/');
});

module.exports = router