// ----------------------------------------------------------------------

export function Paper(theme: any) {
	return {
		MuiPaper: {
			defaultProps: {
				elevation: 0
			},

			styleOverrides: {
				root: {
					backgroundImage: 'none'
				}
			},
			variants: [
				{
					props: { variant: 'secondary' },
					style: {
						boxShadow: theme.customShadows.z4,
						borderRadius: '0px'
					}
				}
			]
		}
	}
}
