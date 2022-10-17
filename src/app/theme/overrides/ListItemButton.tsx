export function ListItemButton(theme: any) {
	return {
		MuiListItemButton: {
			styleOverrides: {
				root: {
					'&.Mui-selected': {
						backgroundColor: theme.palette.blue.light,
						'&:hover': {
							backgroundColor: theme.palette.blue.light
						}
					}
				}
			}
		}
	}
}
