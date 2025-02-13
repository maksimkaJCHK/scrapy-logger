import typescript from '@rollup/plugin-typescript';

import terser from '@rollup/plugin-terser';
import sizes from "rollup-plugin-sizes";
import { visualizer } from "rollup-plugin-visualizer";

import {
  input,
  file,
  fileCJS,
  declarationDir
} from './rollup.var.js';

const typePlagins = [
  terser({
    output: {
      comments: false,
    },
    compress: {
      drop_console: true,
    },
  }),
  sizes(),
  visualizer({
    emitFile: false,
    filename: "visualizations.html",
  }),
];

export default [
  {
    input,
    output: {
      file,
      format: 'es'
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      ...typePlagins
    ]
  },
  {
    input,
    output: {
      file: fileCJS,
      format: 'cjs'
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          declarationDir,
        }
      }),
      ...typePlagins
    ]
  }
];