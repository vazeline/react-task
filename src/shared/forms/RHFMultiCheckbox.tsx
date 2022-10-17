import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const RHFCheckbox = ({ name, ...other }: any) => {
	const { control } = useFormContext()

	return (
		<FormControlLabel
			control={<Controller name={name} control={control} render={({ field }) => <Checkbox {...field} checked={field.value} />} />}
			{...other}
		/>
	)
}

const RHFMultiCheckbox = ({ name, options, ...other }: any) => {
	const { control } = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const onSelected = (option: any) =>
					field.value.includes(option) ? field.value.filter((value: any) => value !== option) : [...field.value, option]

				return (
					<FormGroup>
						{options.map((option: any) => (
							<FormControlLabel
								key={option.value}
								control={
									<Checkbox
										checked={field.value.includes(option.value)}
										onChange={() => field.onChange(onSelected(option.value))}
									/>
								}
								label={option.label}
								{...other}
							/>
						))}
					</FormGroup>
				)
			}}
		/>
	)
}

export { RHFCheckbox, RHFMultiCheckbox }
