import React from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import { LinkProps } from '@mui/material/Link'

// eslint-disable-next-line react/display-name
const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>((props, ref) => {
	const { href, ...other } = props
	// Map href (MUI) -> to (react-router)
	return <RouterLink ref={ref} to={href} {...other} />
})

export function Button(theme: any) {
	return {
		MuiButton: {
			styleOverrides: {
				sizeSmall: {
					height: 35
				},
				sizeMedium: {
					height: 41
				}
			},
			defaultProps: {
				disableElevation: true
			},
			variants: [
				{
					props: { variant: 'contained' },
					style: {
						fontFamily: '"Open Sans", sans-serif',
						fontWeight: '700',
						fontSize: '11px'
					}
				},
				{
					props: { variant: 'outlined' },
					style: {
						fontFamily: '"Open Sans", sans-serif',
						fontWeight: '700',
						fontSize: '11px'
					}
				},
				{
					props: { variant: 'link' },
					style: {
						fontWeight: '300',
						lineHeight: '20px',
						textDecorationLine: 'underline'
					}
				},
				{
					props: { variant: 'text' },
					style: {
						fontFamily: '"Open Sans", sans-serif',
						fontWeight: '700',
						fontSize: '11px'
					}
				}
			]
		},
		MuiLink: {
			defaultProps: {
				component: LinkBehavior
			} as LinkProps
		}
	}
}
