import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/logger.ts',
  output: [
    {
      file: './lib/ts-logger.js',
      sourcemap: 'inline',
      format: 'es'
    },
    {
      file: './lib/cjs/ts-logger.js',
      sourcemap: 'inline',
      format: 'cjs'
    },
  ],
  plugins: [typescript()]
};