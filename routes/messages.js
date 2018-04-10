var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Skill = require('../models/skill');

/* API to get all the skills present in the database */

router.get('/', function (req, res, next) {
    Skill.find()
        .exec(function (err, skills) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: skills
            });
        });
});

/** API to add the skill to the database */
router.post('/', function (req, res, next) {

        var skill = new Skill({
            name: req.body.name,
            acceptoption: req.body.acceptoption,
            rejectoption: req.body.rejectoption
        });

        skill.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Saved skill',
                obj: result
            });
        });
    });

    /** API to edit or update the information of a particular skill in database */

router.patch('/:id', function (req, res, next) {
    Skill.findById(req.params.id, function (err, skill) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!skill) {
            return res.status(500).json({
                title: 'No Skill Found!',
                error: {message: 'Skill not found'}
            });
        }
        skill.name = req.body.name;
        skill.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated skill',
                obj: result
            });
        });
    });
});

/** API to delete a skill from the database */

router.delete('/:id', function (req, res, next) {
    Skill.findById(req.params.id, function (err, skill) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!skill) {
            return res.status(500).json({
                title: 'No Skill Found!',
                error: {message: 'Skill not found'}
            });
        }
        skill.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted skill',
                obj: result
            });
        });
    });
});

module.exports = router;