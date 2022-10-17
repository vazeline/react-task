import { Card } from './Card'
import { Button } from './Button'
import { Typography } from './Typography'
import { Paper } from './Paper'
import { Container } from './Container'
import { FormLabel } from './FormLabel'
import { MenuItem } from './MenuItem'
import { Drawer } from './Drawer'
import { Icon } from './Icon'
import { ListItemButton } from './ListItemButton'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
	return Object.assign(
		Container(theme),
		FormLabel(theme),
		MenuItem(theme),
		Drawer(theme),
		Card(theme),
		Paper(theme),
		Button(theme),
		Typography(theme),
		Icon(theme),
		ListItemButton(theme)
	)
}
