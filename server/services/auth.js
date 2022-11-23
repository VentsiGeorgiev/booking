const User = require('../models/User');

async function registerUser(email, password) {

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User Already exists');
    }

    const user = await User.create({
        email,
        password,
    });

    return createSession(user);
}

async function loginUser(email, password) {

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isCorrectPassword = await user.comparePasswords(password);

    if (!isCorrectPassword) {
        throw new Error('Invalid email or password');
    }

    return createSession(user);
}

async function updateUser(id, userData) {

    const { firstName, lastName, displayName, phoneNumber } = userData;

    const user = await User.findById(id).select('-password');

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (displayName) {
        user.displayName = displayName;
    }
    if (phoneNumber) {
        user.phoneNumber = phoneNumber;
    }

    await user.save();

    return user;

}


function createSession(user) {

    return {
        id: user._id,
        email: user.email,
        userImage: user.userImage,
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
        token: user.createJWT(),
    };
}

module.exports = {
    registerUser,
    loginUser,
    updateUser,
};