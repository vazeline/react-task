export function Drawer(theme: any) {
	return {
		MuiDrawer: {
			defaultProps: {
				elevation: 0
			},
			styleOverrides: {
				root: {
					whiteSpace: 'nowrap',
					boxShadow: theme.customShadows.z4
				}
			}
		}
	}
}
