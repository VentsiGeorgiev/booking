const User = require('../models/User.js');
const { registerUser, loginUser, updateUser } = require('../services/auth.js');

const register = async (req, res) => {
    try {
        const { email, password, repass } = req.body;

        if (!email || !password || !repass) {
            throw new Error('All fields are required');
        }

        // [TODO] Uncomment
        // if (password.trim().length < 6) {
        //     throw new Error('Password must be at least 6 characters long');
        // }

        // if (password.trim() !== repass.trim()) {
        //     throw new Error('Passwords don\'t match');
        // }

        const result = await registerUser(email, password);

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email.trim() || !password.trim()) {
            res.status(400);
            throw new Error('All fields are required');
        }

        // [TODO] Uncomment
        // if (password.trim().length < 6) {
        //     throw new Error('Password must be at least 6 characters long');
        // }

        const result = await loginUser(email, password);

        res.status(200).json(result);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const uploadImage = async (req, res) => {

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

const update = async (req, res) => {

    try {
        const { id, firstName, lastName, displayName, phoneNumber, dateOfBirth, nationality, gender } = req.body;

        const userData = {
            firstName,
            lastName,
            displayName,
            phoneNumber,
            dateOfBirth,
            nationality,
            gender
        };

        const result = await updateUser(id, userData);

        res.json(result);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


module.exports = {
    register,
    login,
    uploadImage,
    update,
};