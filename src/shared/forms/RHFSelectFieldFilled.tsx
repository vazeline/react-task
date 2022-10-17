import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { MenuItem, TextField, Typography,Autocomplete } from '@mui/material'

type OptionType = {
	id: number
	label: string
}

export default function RHFSelectFieldFilled({ name, options, label, errors, ...other }: any) {
	const { control, register } = useFormContext()

	other.sx = {
		...other.sx,
		'& .MuiOutlinedInput-root': {
			backgroundColor: 'white'
		},
		textAlign: 'start'
	}

	const [inputValue, setInputValue] = React.useState('');
	const getOpObj = (option : any) => {
		if (!option.id)
			option = options.find((op : any) => op.id === option);
		return option;
	};

	return (
		<Controller
			name={name}
			control={control}
			rules={{ required: true }}

			render={({ field:{onChange,value}, fieldState: { error } }) => (
				<div>
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
					<Autocomplete
						value={value}
						disablePortal
						autoHighlight
						options={options}
						sx={{ backgroundColor: 'white', borderRadius: '4px' }}
						renderInput={(params) => 							
						<TextField
							{...params}
							
							margin="normal"
							variant="outlined"
							error={!!errors.item}
							helperText={errors.item && "item required"}
							required
						/>}
						onChange={(event, item:any) => {
							onChange(item);
							if(other.setvalue)
								other.setvalue(item.label);
						}}
						onInputChange={(event, newInputValue) => {
							setInputValue(newInputValue);
							
							if(other.onChange)
								other.onChange(newInputValue);
						}}
						isOptionEqualToValue={(option:OptionType, value:OptionType) => option.id === value.id}
						renderOption={(props, option: OptionType) => {
							return <>
									<li style={{backgroundColor:'white'}} {...props} key={option.id}>
										{option.label}
									</li>
								</>
								}}
						/>

				</div>
			)}
		/>
	)
}
