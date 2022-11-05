const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email input is required'],

    },
    password: {
        type: String,
        required: [true, 'Password input is required'],
    },
},
    {
        timestamps: true,
    }
);

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
};

UserSchema.methods.comparePasswords = async function (pass) {
    const isMatch = await bcrypt.compare(pass, this.password);
    return isMatch;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
