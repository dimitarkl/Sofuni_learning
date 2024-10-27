const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

//TODO change for exam
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})
userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12)
})
const User = mongoose.model('User', userSchema);
module.exports = User;