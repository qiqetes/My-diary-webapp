const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on users')
});

router.post("/", async (req, res) => {
    // console.log(req.body);
    const user = new User({
        name: req.body.name
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);

    } catch (err) {
        res.send({ message: err });
    }
});

module.exports = router; 