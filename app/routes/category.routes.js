module.exports = (app) => {
    const category = require('../controllers/category.controller.js');

    app.post('/categories', category.create);
    app.get('/categories', category.findAll);


}