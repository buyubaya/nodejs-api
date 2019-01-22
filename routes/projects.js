const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/Projects');


// GET
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Project.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({
            message: err
        });
    });
});

// POST
router.post('/', (req, res, next) => {
    const project = new Project({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    project.save()
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    });
});



module.exports = router;