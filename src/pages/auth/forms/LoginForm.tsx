// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO Fix this problem with eslint and types
import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack, IconButton, InputAdornment, Button, Typography } from '@mui/material'
import { FormProvider } from '../../../shared/forms/FormProvider'
import RHFTextField from '../../../shared/forms/RHFTextField'
import { Iconify } from '../../../shared/components/Iconify'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/system'
import { LoginRequest } from '../../../features/auth/models'
import { useLoginUserMutation } from '../../../features/user/userApi'

const LoginSchema = Yup.object().shape({
	email: Yup.string().required('Email is required'),
	password: Yup.string().required('Password is required')
})

const LoginForm = () => {
	const navigate = useNavigate()
	const [loginUser, { isLoading, isError, error, isSuccess, data }] = useLoginUserMutation()

	const [showPassword, setShowPassword] = useState(false)

	const defaultValues = {
		email: '',
		password: ''
	}

	const methods = useForm({
		resolver: yupResolver(LoginSchema),
		defaultValues
	})

	const {
		handleSubmit,
		formState: { isSubmitting },
		setError
	} = methods

	useEffect(() => {
		if (isError) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			switch (error.data.code) {
				case 'UNVERIFIED_USER':
					setError('email', { type: 'custom', message: '*Unverified email' })
					break
				case 'UNAUTHORIZED_ACCESS':
					setError('email', { type: 'error' })
					setError('password', { type: 'custom', message: '*The username or password you entered is incorrect' })
					break
			}
		}
	}, [isLoading])

	const onSubmit = async (data: LoginRequest) => {
		await loginUser(data)
	}

	const ContentStyle = styled('div')(({ theme }) => ({
		maxWidth: 480,
		margin: 'auto',
		minHeight: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: theme.spacing(12, 0)
	}))

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Container maxWidth="sm">
				<ContentStyle>
					<Stack spacing={3}>
						<Typography variant="h3" sx={{ alignSelf: 'center' }}>
							Welcome back!
						</Typography>

						<RHFTextField sx={{ width: '380px', alignSelf: 'center' }} name="email" label="Your Email" />

						<RHFTextField
							sx={{ width: '380px', alignSelf: 'center' }}
							name="password"
							label="Password"
							type={showPassword ? 'text' : 'password'}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
											<Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					</Stack>
					<Button
						type="submit"
						variant="contained"
						color="lightGrey"
						sx={{
							alignSelf: 'center',
							width: '380px',
							marginTop: '30px'
						}}
					>
						Log In
					</Button>

					<Button
						variant={'link' as any} // TODO: figure out the module augmentation
						sx={{ alignSelf: 'center', textDecoration: 'underline', padding: '10px auto' }}
						onClick={() => navigate('/auth/register')}
					>
						Register
					</Button>

					<Button
						variant={'link' as any}
						sx={{ alignSelf: 'center', textDecoration: 'underline', padding: '10px auto' }}
						onClick={() => navigate('/auth/reset-password')}
					>
						Forgot password?
					</Button>
				</ContentStyle>
			</Container>
		</FormProvider>
	)
}

export { LoginForm }
