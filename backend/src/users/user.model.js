const mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
    },
    resetPassword: {
        type: String,
        default: null
    },
    resetPasswordExpires: {
        type: Date,
        default: null
    },
    emailToken: {
        type: String,
        default: null
    },
    emailTokenExpires: {
        type: Date,
        default: null
    },
    accessToken: {
        type: String,
        default: null
    },
    referralCode: {
        type: String,
        unique: true
    },
    referrer: {
        type: String,
        default: null
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

module.exports.hashPassword = async (password) => {
    console.log(password)
    try {
        const salt = await bcryptjs.genSalt(10); //10 rounds
        return await bcryptjs.hash(password, salt);
    } catch (error) {
        throw new Error("Hashing failed", error);
    }
};

module.exports.comparePassword = async (inputPassword, hashedPassword) => {
    try {
        return await bcryptjs.compare(inputPassword, hashedPassword);
    } catch (error) {
        throw new Error("Comparison failed", error);
    }
};