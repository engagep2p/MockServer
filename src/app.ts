/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response, NextFunction } from 'express';

import cookieParser from 'cookie-parser';
import routers from './routers';

/**
 * Build the express app
 * @returns {express.Application}
 */
function buildApp(): express.Application {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //app.use(myMiddleware);
  app.use(cookieParser());
  app.use(routers());

  //handle errors
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);

    if (err instanceof SyntaxError) {
      return res.status(400).send('Bad Request');
    }
    return res.status(500).send(err.message);
  });

  return app;
}

export { buildApp, routers };
