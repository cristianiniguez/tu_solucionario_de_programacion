import { NextApiHandler } from 'next';

export type TRouter = { [key: string]: NextApiHandler };
