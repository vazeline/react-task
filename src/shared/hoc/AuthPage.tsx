import React from 'react'
import { forwardRef } from 'react'
import { Box } from '@mui/material'

type AuthPageProps = {
	children?: React.ReactElement
}

// eslint-disable-next-line react/display-name
const AuthPage = forwardRef(({ children, ...other }: AuthPageProps, ref) => (
	<>
		<Box ref={ref} {...other}>
			{children}
		</Box>
	</>
))

export { AuthPage }
