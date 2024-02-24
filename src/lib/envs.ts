/* eslint-disable @typescript-eslint/naming-convention */

import { z } from 'zod';

const envs: { [key: string]: string } = {
  HOST: process.env.HOST || '',
  PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || ''
};

const envSchema = z.object({
  HOST: z.string().min(1),
  PORT: z.string().min(1),
  NODE_ENV: z.string().min(1)
});

envSchema.parse(envs);

export default envs;
