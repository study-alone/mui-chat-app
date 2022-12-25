import Router from '@routes/index'
import ThemeProvider from '@theme/index'
import ThemeSettings from '@components/settings'
import { ModalProvider } from '@lib/modal/Provider'
/** ModalProvider: 모달(dialog) 관리 */

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<ModalProvider>
				<ThemeSettings>
					<Router />
				</ThemeSettings>
			</ModalProvider>
		</ThemeProvider>
	)
}

export default App
