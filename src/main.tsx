import { createApp } from '@lib/createApp'
import reportWebVitals from './reportWebVitals'
import App from './App'

createApp({
	element: <App />,
	recoilDebuggerPosition: 'top-left',
	containerId: 'root',
	useHistory: true,
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
