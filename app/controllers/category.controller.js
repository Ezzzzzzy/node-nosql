const Category = require('../models/category.model.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Body should not be empty"
        });
    }

    const category = new Category({
        name: req.body.name
    });

    category.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.findAll = (req, res) => {
    Category.find()
    .then(category => {
        res.send(category);
    }).catch(err =>{
        res.status(500).send({
            mesasge: err.mesasge
        });
    });
}