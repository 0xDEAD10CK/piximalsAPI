import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

interface AuthenticatedRequest extends Request {
    user?: any;
}

const authRoute = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(403).json({
                msg: 'No token provided',
            })

            return
        }

        const token = authHeader.split(' ')[1];
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error('JWT_SECRET is not defined');
        }
        
        const payload = jwt.verify(token, secret);
        req.user = payload

        next()
    } catch (error) {
        res.status(403).json({
            msg: 'Not authorized to access this route',
        })
        return 
    }
}

export default authRoute
