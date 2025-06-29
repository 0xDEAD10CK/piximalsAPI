import { Request } from "express"
import { JwtPayload } from "../types/User"

export function isAuthenticated(req: Request): req is Request & { user: JwtPayload } {
  return !!req.user;
}
