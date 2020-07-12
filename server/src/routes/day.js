const express = require('express');
const Day = require('../models/day');
const { models } = require('mongoose');

const router = express.Router();

router.get('/', async (req, res) => {
    // TODO: don't send all days??
    try {
        const days = await Day.find();
        res.json(days);
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:dayId', async (req, res) => {
    try {
        const day = await models.Day.find({ dayId: req.params.dayId });

        if (day.length === 0) {
            res.status(404);
            res.json({ message: "No day found with that id" });
            return;
        }
        res.json(day);
    } catch (err) {
        res.status(400);
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    // TODO: add validation for non empty diarys array
    // TODO: add day date string validation??
    const newDay = new Day({
        dayId: req.body.dayId,
        date: Date.now(),
        diarys: req.body.diarys
    });

    try {
        const savedDay = await newDay.save();
        res.json({ savedDay });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;