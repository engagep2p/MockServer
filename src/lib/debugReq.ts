import type { Request } from 'express';
import { Reqtype } from '../types/constants';

export function reqLogs(
  reqType: Reqtype,
  title: string,
  r: Request | Response,
  data?: any
) {
  try {
    console.log(`${title} -----------------------------------`);

    if (reqType === Reqtype.REQUEST) {
      const rr = r as Request;

      console.log('url:', rr.url);
      console.log('query =>', rr.query);

      console.log('headers:');
      console.log(rr.headers);

      if (rr?.body && (rr.method === 'POST' || rr.method === 'PUT')) {
        console.log('\nbody:');
        console.log(data);
      }
    } else {
      // NOTE: this is a GLOBAL response, NOT express response
      const rr = r as globalThis.Response;

      console.log('status:', rr.status);

      console.log('headers:');

      // get express response header

      rr?.headers?.forEach((value: string, key: string) => {
        console.log(key + ': ' + value);
      });

      console.log('\nbody:');
      console.log(data ? data : 'null');
    }
    console.log('#-----------------------------------\n\n');
  } catch (e) {
    console.log(e);
  }
}
