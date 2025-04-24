import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("Class based Middleware")
        next();
    }
}