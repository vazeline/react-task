import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Typography } from '@mui/material'

export default function RHFTextFieldFilled({ name, ...other }: any) {
	const { control } = useFormContext()

	other.sx = {
		...other.sx,
		'& .MuiOutlinedInput-root': {
			backgroundColor: 'white'
		}
	}

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<div style={{ alignSelf: 'center' }}>
					{!!other.title && (
						<Typography
							sx={{
								textAlign: 'start',
								fontFamily: 'Lexend',
								fontStyle: 'normal',
								fontWeight: '300',
								fontSize: '14px',
								lineHeight: '18px',
								color: '#001340',
								marginBottom: '10px',
								marginLeft: '2px'
							}}
						>
							{other.title}
						</Typography>
					)}

					<TextField
						{...field}
						disabled={other.disabled}
						fullWidth
						value={typeof field.value === 'number' && field.value <= 0 ? '' : field.value}
						error={!!error}
						helperText={error?.message}
						size="small"
						InputProps={{ inputProps: { min: 0, max: other.max ? other.max : undefined } }}
						variant="outlined"
						onChange={(event:any)=>{
							console.log(event.target.value);
							if(other.setvalue)
								other.setvalue(event.target.value);
						}}
						{...other}
					/>
				</div>
			)}
		/>
	)
}
