import jwt from 'jsonwebtoken'

const adminAuthRoute = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(403).json({
                msg: 'No token provided',
            })
        }

        const token = authHeader.split(' ')[1]
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        console.log(payload)

        if (payload.role !== process.env.ADMIN_ROLE) {
            return res.status(403).json({
                msg: 'Check your priviledges!',
            })
        }

        req.user = payload

        return next()
    } catch (error) {
        return res.status(403).json({
            msg: 'Not authorized to access this route',
        })
    }
}

export default adminAuthRoute
