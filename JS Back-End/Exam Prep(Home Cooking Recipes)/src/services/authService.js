const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

const SECRET = require('../config/SECRET')

exports.register = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (user)
        throw new Error('Email already exists')
    else if (userData.rePass != userData.password)
        throw new Error('Password missmatch')
    const createdUser = await User.create(userData)
    const token = await tokenCreation(createdUser);
    return token
}
//TODO change according to project
exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email })
    if (!user) throw new Error('Email or password is invalid')

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('Email or password is invalid')
    const token = await tokenCreation(user);
    return token
}
function tokenCreation(user) {
    //TODO change based on project
    const payload = {
        _id: user._id,
        email: user.email,
    }
    return jwt.sign(payload, SECRET, { expiresIn: '2h' })
}