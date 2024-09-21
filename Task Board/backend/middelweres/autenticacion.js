
const autenticacion = async (req, res, next) => {
    if (req.session && req.session.userId) {
        req.user = await User.findById(req.session.userId);
    }
    next();
}

module.exports = autenticacion