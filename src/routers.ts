/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { reqLogs } from './lib/debugReq';
import { Reqtype } from './types/constants';

export default function mmsRoutes(): Router {
  const router = Router();

  router.get('*', function (req, res, _next) {
    reqLogs(Reqtype.REQUEST, 'request', req, req.body);

    res.send(JSON.stringify({ message: 'ok' }));
  });

  router.post('*', function (req, res, _next) {
    reqLogs(Reqtype.REQUEST, 'request', req, req.body);

    res.send({ message: 'ok' });
  });

  return router;
}
