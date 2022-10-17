import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'

export default function RHFTextField({ name, ...other }: any) {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<div style={{ alignSelf: 'center' }}>
					{!!other.title && <Typography sx={{ textAlign: 'start' }}>{other.title}</Typography>}

					<TextField
						{...field}
						fullWidth
						value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
						error={!!error}
						helperText={error?.message}
						size="small"
						{...other}
					/>
				</div>
			)}
		/>
	)
}
