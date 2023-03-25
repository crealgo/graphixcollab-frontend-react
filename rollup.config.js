import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'umd', // iife, cjs, amd
			sourcemap: true,
			name: 'HydraReact'
		},
		{
			file: 'dist/index.mjs',
			format: 'esm',
			sourcemap: true
		},
	],
	plugins: [
		external(),
		resolve({
			preferBuiltins: false
		}),
		commonjs(),
		typescript({ tsconfig: 'tsconfig.build.json' }),
		terser()
	]
}
