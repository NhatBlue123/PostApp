const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const bearerHeader = req.header("accessToken");
    if (!bearerHeader) {
        return res.status(401).json({ error: 'User not logged in' });
    }

    try {
        const validToken = verify(bearerHeader, 'importantsecret');
        if (validToken) {
            req.user = validToken; // Gắn thông tin token vào req
            next();
        }
    } catch (err) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};

module.exports = { validateToken };
