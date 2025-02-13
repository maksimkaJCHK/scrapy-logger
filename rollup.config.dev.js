import typescript from '@rollup/plugin-typescript';

import {
  input,
  file,
  fileCJS,
  declarationDir
} from './rollup.var.js';

export default [
  {
    input,
    output: {
      file,
      sourcemap: 'inline',
      format: 'es'
    },
    plugins: [typescript({
      tsconfig: './tsconfig.json',
    })]
  },
  {
    input,
    output: {
      file: fileCJS,
      sourcemap: 'inline',
      format: 'cjs'
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
          compilerOptions: {
            declarationDir,
          }
      })
    ]
  },
];