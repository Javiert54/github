import { Request } from 'express';

export interface ReqExt extends Request {
    user?: {id: string};
}