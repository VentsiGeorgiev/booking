const User = require('../models/User.js');

const register = async (req, res) => {
    try {
        const { email, password, repass } = req.body;

        if (!email || !password || !repass) {
            res.status(400);
            throw new Error('All fields are required');
        }

        // if (password.trim().length < 6) {
        //     throw new Error('Password must be at least 6 characters long');
        // }
        // if (password.trim() !== repass.trim()) {
        //     throw new Error('Passwords don\'t match');
        // }

        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error('User Already exists');
        }

        const user = await User.create({
            email,
            password,
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                email: user.email,
                token: user.createJWT(),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }


    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400);
            throw new Error('All fields are required');
        }
        // if (password.trim().length < 6) {
        //     throw new Error('Password must be at least 6 characters long');
        // }

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isCorrectPassword = await user.comparePasswords(password);

        if (!isCorrectPassword) {
            throw new Error('Invalid email or password');
        }

        if (user) {
            res.status(200).json({
                _id: user._id,
                email: user.email,
                token: user.createJWT(),
            });
        }


    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};


module.exports = {
    register,
    login,
};