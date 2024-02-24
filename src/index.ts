import * as app from './app';
import { Request, Response } from 'express';

// import dotenv using esm
import dotenv from 'dotenv';
dotenv.config();

import colors from 'colors';

const server = app.buildApp();

colors.enable();

server.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
server.listen({ host, port }, () => {
  console.log(`🚀 Express started on http://${host}:${port}`.green);
});
