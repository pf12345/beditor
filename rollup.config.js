import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel  from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import {terser} from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';

const isDev = process.env.NODE_ENV === 'development';

export default {
  input: "./src/index.ts",
  output: {
    format: 'es',
    plugins: isDev ? [] : [terser()],
    file: './dist/index.js',
    inlineDynamicImports: true
  },
  plugins: [
    // 需要使用，避免重复使用重复依赖，解决react非法hook调用问题: https://zh-hans.reactjs.org/warnings/invalid-hook-call-warning.html
    external({
      includeDependencies: true,
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: false,
      minimize: true,
      use : [
        'sass', 
        ['less', { javascriptEnabled: true }]
      ],
    }),
    typescript({
      tsconfigDefaults: { compilerOptions: { declaration: true } },
      tsconfig: "tsconfig.json",
      tsconfigOverride: { compilerOptions: { declaration: false } }
    }),
    babel({ 
      babelrc: false,
      extensions: [...DEFAULT_EXTENSIONS, '.js', '.ts', '.tsx'], 
      exclude: "node_modules/**", 
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      extensions: [...DEFAULT_EXTENSIONS, '.js', '.ts', '.tsx'],
      dedupe: ["react", "@aomao/engine", "filesize"] // 解决同一依赖包重复打入
    }),
    commonjs({
      include: /node_modules/,
      exclude: [
        'node_modules/process-es6/**'
      ],
      namedExports: {
        'react': ['createElement', 'Component', 'useState' ],
        'react-dom': ['render'],
        'esrever': ['reverse'],
        'eventemitter2': ['EventEmitter2'],
        'diff-match-patch': ['diff_match_patch', 'DIFF_DELETE', 'DIFF_INSERT', 'DIFF_EQUAL'],
        'node_modules/react-is/index.js': ['isMemo', 'isFragment']
      }
    }),
  ],
  watch: {
    include: 'src/**',
    clearScreen: true
  }
}