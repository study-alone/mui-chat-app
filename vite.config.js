var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i]
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
				}
				return t
			}
		return __assign.apply(this, arguments)
	}
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
// import fs from 'fs';
// plugins
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import checker from 'vite-plugin-checker'
// import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr'
// import babelImport from 'vite-plugin-babel-import'
import babelMacros from 'vite-plugin-babel-macros'
import { createHtmlPlugin } from 'vite-plugin-html'
/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(function (_a) {
	var mode = _a.mode,
		command = _a.command
	var envDir = path.resolve(process.cwd(), './config/env/')
	var env = __assign(__assign({}, process.env), loadEnv(mode, envDir))
	var isDev = mode === 'development'
	// console.log({ isDev, env })
	var plugins = [
		/** React hot reload */
		react(),
		/** typescript paths alias */
		tsconfigPaths({}),
		/** eslint error overlay */
		eslint({ cache: false }),
		checker({
			// typescript error overlay
			typescript: {
				tsconfigPath: './tsconfig.json',
				root: './',
				buildMode: isDev,
			},
		}),
		// like webpack analizer
		visualizer({
			open: isDev,
		}),
		/**
		 * @description
		 * Vite's default browser support baseline is Native ESM, native ESM dynamic import, and import.meta.
		 * This plugin provides support for legacy browsers that do not support those features when building
		 * for production.
		 */
		legacy({
			ignoreBrowserslistConfig: true,
		}),
		svgr(),
		babelMacros(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					app_title: env.VITE_APP_TITLE,
				},
			},
		}),
	]
	return {
		server: {
			// ????????? ???????????? ??????
			proxy: {
				// ????????? ???
				'/v1': {
					target: env.VITE_PUBLIC_API_URL,
					changeOrigin: true,
					configure: function (proxy, options) {
						// proxy ???????????? 'http-proxy'??? ??????????????? ???????????????
					},
				},
			},
		},
		plugins: plugins,
		// ?????? ?????????
		optimizeDeps: {
			// ????????? ?????????
			include: [
				// 'antd/lib/layout',
			],
			esbuildOptions: {
				target: 'es2020',
			},
		},
		build: {
			target: 'es2020',
		},
		// ???????????? ??????
		envDir: envDir,
		// ???????????? ?????????
		envPrefix: 'VITE_',
	}
})
