// @ts-check
// import commonjs from '@rollup/plugin-commonjs';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';
// import copy from 'rollup-plugin-copy';
// import json from '@rollup/plugin-json';
// import brotli from 'rollup-plugin-brotli';

import federation from 'rollup-plugin-module-federation';

import { federationconfig } from './federation.config.js';

import { defineConfig } from 'rolldown';

export default defineConfig({
  output: {
    dir: `dist/rolldown/esm`,
  },
  plugins: [
    // @ts-ignore plugin types
    federation(await federationconfig('rollup', 'esm')),
  ],
});

// const config = async ({ outputFormat }) => defineConfig({
//   output: {
//     dir: `dist/rollup/${outputFormat}`,
//     format: outputFormat,
//     sourcemap: true,
//   },
//   plugins: [
//     // @ts-ignore plugin types
//     federation(await federationconfig('rollup', outputFormat)),
//     // replace({
//     //   'process.env.NODE_ENV': JSON.stringify('production'),
//     //   preventAssignment: true,
//     // }),
//     // nodeResolve({
//     //   browser: true,
//     // }),
//     // json(),
//     // commonjs(),
//     // // brotli(),
//     // copy({
//     //   targets: [
//     //     {
//     //       src: `./public/${outputFormat}/index.html`,
//     //       dest: `dist/rollup/${outputFormat}`,
//     //     },
//     //   ],
//     // }),
//   ],
// });

// const multiBuildConfig = [
//   await config({ outputFormat: 'esm' }),
//   await config({ outputFormat: 'system' }),
// ];

// export default multiBuildConfig;
