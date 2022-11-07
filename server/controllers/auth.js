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
                userImage: user.userImage,
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
                userImage: user.userImage,
                token: user.createJWT(),
            });
        }


    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

const update = async (req, res) => {

    try {
        const { id } = req.body;
        // const userImage = req.file.originalname;
        const userImg = req.file.filename;


        const user = await User.findById(id);
        user.userImage = userImg;

        const updatedUser = await user.save();

        const { userImage } = updatedUser;

        res.json(userImage);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const updateUser = async (req, res) => {

    try {
        const { id, firstName, lastName } = req.body;

        const user = await User.findById(id).select('-password');
        user.firstName = firstName;
        user.lastName = lastName;

        const updatedUser = await user.save();

        res.json(updatedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


module.exports = {
    register,
    login,
    update,
    updateUser,
};