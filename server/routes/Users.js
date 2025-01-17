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

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    // tim user trong database
    const user = await Users.findOne({ where: { userName: userName } });
    if (!user) {
        return res.json({ error: "User doesn't exist" });
    }
    // so sanh password
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.json({ error: "Wrong Username and Password Combination" });
        }
        res.json("You logged in!");
    });

});


router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});


module.exports = router;