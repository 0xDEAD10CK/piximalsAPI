import jwt from 'jsonwebtoken'

const authRoute = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(403).json({
                msg: 'No token provided',
            })
        }

        const token = authHeader.split(' ')[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        req.user = payload

        return next()
    } catch (error) {
        return res.status(403).json({
            msg: 'Not authorized to access this route',
        })
    }
}

export default authRoute
