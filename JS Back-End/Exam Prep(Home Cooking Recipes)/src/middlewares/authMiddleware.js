const jwt = require('../lib/jwt')
const SECRET = require('../config/SECRET')

exports.authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth']

    if (!token) return next()

    try {
        const decodedToken = await jwt.verify(token, SECRET)
        req.user = decodedToken;
        res.locals.isAuthenticated = true;
        res.locals.user = decodedToken;
        next()
    } catch (err) {
        res.clearCookie('auth')
        res.redirect('/auth/login')
        console.error('Failed to authenticate token:', err)
    }
}
exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login')
    }
    next()
}