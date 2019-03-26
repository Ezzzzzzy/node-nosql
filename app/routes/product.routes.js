module.exports = (app) => {
    const product = require('../controllers/product.controller.js');

    app.post('/products', product.create);
    app.get('/products', product.findAll);
}