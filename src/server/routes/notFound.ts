import { Request, Response } from 'express';

const notFound = (_req: Request, res: Response) => res.send('NOT FOUND');

export default notFound;
