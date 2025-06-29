import { JwtPayload } from "../User";

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}