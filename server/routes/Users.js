const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const { userName, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            userName: userName,
            password: hash,
        });
        res.json("Success");
    }
    )
});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});


module.exports = router;