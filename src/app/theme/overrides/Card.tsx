export function Card(theme: any) {
	return {
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: theme.customShadows.z4,
					borderRadius: '10px',
					position: 'relative',
					zIndex: 0 // Fix Safari overflow: hidden with border radius
				}
			}
		}
	}
}
