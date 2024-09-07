import { BadRequest } from 'http-errors';
import { NextFunction, Request, Response } from 'express';

export function log(req: Request, res: Response, next: NextFunction){
    try {
        console.log("[LOG] " + req.method + " " + req.url);
        return next();
    } catch (error) {
        throw new BadRequest('Log middleware error');
    }
}