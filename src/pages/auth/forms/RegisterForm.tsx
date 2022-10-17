// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO Fix this problem with eslint and types
import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack, Button, Typography, FormControlLabel, Checkbox, FormLabel, FormControl } from '@mui/material'
import { FormProvider } from '../../../shared/forms/FormProvider'
import RHFTextField from '../../../shared/forms/RHFTextField'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/system'
import { useRegisterUserMutation } from '../../../features/user/userApi'
import { RHFCheckbox } from '../../../shared/forms/RHFMultiCheckbox'

// TODO add Private Policy document
const acceptPolicy = (
	<Typography
		sx={{ fontSize: '14px', fontStyle: 'normal', fontHeight: '18px', fontWeight: '300px', lineHeight: '18px', letterSpacing: '0px' }}
	>
		I agree to the <a style={{ textDecoration: 'underline' }}>Privacy Policy</a>
	</Typography>
)

const ContentStyle = styled('div')(({ theme }) => ({
	maxWidth: 480,
	margin: 'auto',
	minHeight: '100%',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column'
}))

const LoginSchema = Yup.object().shape({
	username: Yup.string().required('First Name is required'),
	email: Yup.string().email('Email must be a valid email address').required('Email is required'),
	password: Yup.string().min(4, 'Min length 4').matches(/^\S*$/, 'Whitespace is not allowed').required('Password is required'),
	confirmPassword: Yup.string()
		.min(4, 'Min length 4')
		.matches(/^\S*$/, 'Whitespace is not allowed')
		.oneOf([Yup.ref('password'), null], '*The passwords do not match'),
	acceptPolicy: Yup.boolean().oneOf([true], 'Accept private policy')
})

const RegisterForm = () => {
	const navigate = useNavigate()
	const [registerUser, { isLoading, isError, error, isSuccess }] = useRegisterUserMutation()

	const defaultValues = {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		acceptPolicy: false
	}

	const methods = useForm({
		resolver: yupResolver(LoginSchema),
		defaultValues
	})

	const {
		handleSubmit,
		formState: { errors },
		setError
	} = methods

	useEffect(() => {
		if (isSuccess) {
			navigate('/auth/email-verification')
		}
		if (isError) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			switch (error.data.code) {
				case 'UNIQUE_VIOLATION':
					setError('email', { type: 'custom', message: '*This email is already taken' })
					break
			}
		}
	}, [isLoading])

	const onSubmit = async (data: any) => {
		const submitData = { ...data }
		delete submitData.confirmPassword
		delete submitData.acceptPolicy
		await registerUser(submitData)
	}

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Container maxWidth="sm">
				<ContentStyle>
					<Stack spacing={3}>
						<Typography variant="h3" sx={{ alignSelf: 'center' }}>
							Welcome to Parrot Wings!
						</Typography>

						<RHFTextField sx={{ width: '380px', alignSelf: 'center' }} name="username" label="User Name" />

						<RHFTextField sx={{ width: '380px', alignSelf: 'center' }} name="email" label="Email address" />

						<RHFTextField sx={{ width: '380px', alignSelf: 'center' }} type="password" name="password" label="Password" />

						<RHFTextField
							sx={{ width: '380px', alignSelf: 'center' }}
							type="password"
							name="confirmPassword"
							label="Confirm Password"
						/>
					</Stack>

					<RHFCheckbox
						sx={{
							width: '380px',
							alignSelf: 'center'
						}}
						name="acceptPolicy"
						label={acceptPolicy}
					/>
					{errors.acceptPolicy && (
						<FormLabel
							sx={{
								width: '380px',
								alignSelf: 'center'
							}}
							key={'7'}
							error
						>
							Accept the Private Policy
						</FormLabel>
					)}

					<Button
						type="submit"
						variant="contained"
						color="lightGrey"
						sx={{ alignSelf: 'center', width: '380px', marginTop: '30px' }}
					>
						REGISTER
					</Button>

					<Button
						variant={'link' as any}
						sx={{ alignSelf: 'center', textDecoration: 'underline', paddingTop: '10px' }}
						onClick={() => navigate('/auth/login')}
					>
						Already have an account? Sign In!
					</Button>
				</ContentStyle>
			</Container>
		</FormProvider>
	)
}

export { RegisterForm }
