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
  plugins: [typescript({
    tsconfig: './tsconfig.json',
    compilerOptions: {
      "target": "es2020",
      "outDir": "lib",
      "rootDir": "src",
      "declaration": true,
      "declarationDir": "lib/types",
    },
  })]
};