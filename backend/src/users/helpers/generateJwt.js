const jwt = require("jsonwebtoken");
require("dotenv").config();

const options = {
    expiresIn: "1h"
};

async function generateJwt(email, user_id, is_admin =  false) {
    try {
        const payload = { email: email, id: user_id, isAmin: is_admin }
        const token = await jwt.sign(payload, process.env.JWT_SECRET, options);
        return { error: false, token: token };
    } catch (error) {
        return { error: true };
    }
}

module.exports =  { generateJwt };