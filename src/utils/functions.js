const jwt = require('jsonwebtoken');


function generateToken (user) {
    const payload = { userId: user._id };
    const secretKey = 'your-secret-key'; // Replace with your secret key
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secretKey, options);
};


const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if(token === undefined || token === null ) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_KEY, async(err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user;
        
        next();
    })
}

module.exports = {
    generateToken,
    verifyToken
};