import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';

import packageJson from "./package.json"

export default [{
    input: 'src/index.ts',
    output: [{
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
    },
    {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
    }
    ],
    plugins: [
        peerDepsExternalPlugin(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        terser()
    ],
    external: ['react', 'react-dom']
},
{
    input: 'src/index.ts',
    output: { file: packageJson.types },
    plugins: [dts.default()],
    external: ['react', 'react-dom']
}
]