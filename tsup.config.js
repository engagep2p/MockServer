import { defineConfig } from 'tsup';
import glob from 'tiny-glob';
//import path from "node:path";
//import { fileURLToPath } from "node:url";

//const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  {
    entry: await glob('./**/!(*.d|*.spec).ts'),
    format: ['cjs'], // use 'csj' because 'esm' is not supported by prisma
    platform: 'node',
    target: 'node16',
    shims: false,
    dts: false,
    splitting: true,

    // ignore
    ignoreWatch: [
      '**/node_modules/**',
      '**/.git/**',
      '**/dist/**',
      'prisma/**'
    ],
    ignoreNodeModules: ['consola', 'argon2'],

    esbuildOptions(options) {
      options.external = ['consola'];
    }
  }
]);
