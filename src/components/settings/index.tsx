import SettingsDrawer from '@components/settings/drawer'
//
import ThemeContrast from '@components/settings/ThemeContrast'
import ThemeRtlLayout from '@components/settings/ThemeRtlLayout'
import ThemeColorPresets from '@components/settings/ThemeColorPresets'
import ThemeLocalization from '@components/settings/ThemeLocalization'

// ----------------------------------------------------------------------

const ThemeSettings: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<ThemeColorPresets>
			<ThemeContrast>
				<ThemeLocalization>
					<ThemeRtlLayout>
						{children}
						<SettingsDrawer />
					</ThemeRtlLayout>
				</ThemeLocalization>
			</ThemeContrast>
		</ThemeColorPresets>
	)
}

export default ThemeSettings
