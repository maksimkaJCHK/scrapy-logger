import typescript from '@rollup/plugin-typescript';

import terser from '@rollup/plugin-terser';
import sizes from "rollup-plugin-sizes";
import { visualizer } from "rollup-plugin-visualizer";

export default {
  input: './src/logger.ts',
  output: [
    {
      file: './lib/ts-logger.js',
      format: 'es'
    },
    {
      file: './lib/cjs/ts-logger.js',
      format: 'cjs'
    },
  ],
  plugins: [
    typescript(),
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
  ]
};