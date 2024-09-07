import { Request, Response, NextFunction } from 'express';
import * as egService from './example.service';

export async function create(req: Request, res: Response, next: NextFunction){
    try {
        await egService.create(req.body);
        res.status(201).json({
            message: "Okay"
        })
    } catch (error) {
        next(error);
    }
}