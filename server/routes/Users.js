const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

const {sign} = require('jsonwebtoken');


router.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log("Dữ liệu nhận từ frontend:", req.body); // Debug dữ liệu đầu vào

    try {
        const hash = await bcrypt.hash(password, 10);  // Đợi bcrypt hoàn tất
        console.log("Mật khẩu sau khi mã hóa:", hash);

        const newUser = await Users.create({
            username: username,
            password: hash,
        });
        console.log("User tạo thành công:", newUser);

        res.json("Success");
    } catch (error) {
        console.error("Lỗi khi tạo user:", error);
        res.status(500).json({ error: "Đăng ký thất bại" });
    }
});



router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // tim user trong database
    const user = await Users.findOne({ where: { username: username } });
    if (!user) {
        return res.json({ error: "User doesn't exist" });
    }
    // so sanh password
    bcrypt.compare(password, user.password).then((match) => {
        console.log("Password nhập vào:", password);
        console.log("Password trong database:", user.password);
        
        if (!match) {
            console.log("Mật khẩu không khớp!");
            return res.json({ error: "Wrong Username and Password Combination" });
        }
        
        console.log("Đăng nhập thành công!");
        const accessToken = sign({ username: user.username, id: user.id }, "importantsecret");
        res.json(accessToken);
    });
    

});


router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});


module.exports = router;