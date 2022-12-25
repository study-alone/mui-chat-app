import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

import type { HLJSApi } from 'highlight.js'

// ----------------------------------------------------------------------

declare global {
	interface Window {
		hljs: HLJSApi
	}
}

hljs.configure({
	languages: ['javascript', 'jsx', 'sh', 'bash', 'html', 'scss', 'css', 'json'],
})

if (typeof window !== 'undefined') {
	window.hljs = hljs
}
