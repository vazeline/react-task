import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from '../../shared/forms/FormProvider'
import { Box, Button, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DashboardPage } from '../../shared/hoc/DashboardPage'
import { useNavigate } from 'react-router-dom'
import RHFTextFieldFilled from '../../shared/forms/RHFTextFieldFilled'
import RHFSelectFieldFilled from '../../shared/forms/RHFSelectFieldFilled'
import { useCreateTransactionMutation, useUsersListQuery } from '../../features/user/userApi'
import { CreateTransaction, User, UserFilter } from '../../features/user/models'
import { useAppSelector } from '../../shared/hooks/redux'


const CreateProfileSchema = Yup.object().shape({
	name: Yup.string().required('Profile name is required'),
	amount: Yup.string().required('Username is required'),
})

type formValuesModel = {
	name: string
	amount: number
}

const defaultValues = {
	name: '',
	amount: 0
}

const ContentStyle = styled('div')(({ theme }) => ({
	maxWidth: 900,
	minHeight: '100%',
	display: 'flex',
	justifyContent: 'start',
	flexDirection: 'column',
	marginLeft: '30px',
	marginTop: '30px'
}))

const ButtonBoxStyle = styled('div')(({ theme }) => ({
	maxWidth: 900,
	minHeight: '100%',
	display: 'flex',
	justifyContent: 'start',
	flexDirection: 'row',
	padding: theme.spacing(12, 0)
}))

const CreateTransactionForm = () => {

	const navigate = useNavigate()
	const [filter, setFilter] = useState('');

	const [createTransaction, { isSuccess: isCreateNewTransactionSuccess, isLoading: isCreateNewTransactionLoading }] = useCreateTransactionMutation()	
	const { data: usersData } = useUsersListQuery({filter: filter}, {skip: typeof filter !== 'string' || filter === ''})
	const [usersOptions, setUsersOptions] = useState<any>([])
	
	const [user, setUserState] = useState<User | undefined | null>(useAppSelector((state) => state.user.user))

	const methods = useForm({
		resolver: yupResolver(CreateProfileSchema),
		defaultValues,
		mode: 'onChange'
	})

	const {
		reset,
		setValue,
		handleSubmit,
		watch,
		getValues,
		formState: { isSubmitting, errors }
	} = methods

	useEffect(() => {
		if (usersData?.length) {
			const usersOptions = usersData?.map((user : User) => ({
				value: user.id,
				label: user.name
			}))
			setUsersOptions(usersOptions)
		}
	}, [usersData])

	useEffect(() => {
		if (isCreateNewTransactionSuccess) {
			navigate('/dashboard/transaction')
		}
	}, [ isCreateNewTransactionLoading ])

	const onSubmit = async (data: formValuesModel) => {
		const submitData = { ...data }

		const newTransactionSubmitData: CreateTransaction = {
			name: submitData.name,
			amount: submitData.amount,
		}
		await createTransaction(newTransactionSubmitData)
	}

	const createTransactionLinkList = 
		[
			{
				title: 'Transaction Management',
				route: '/dashboard/transaction'
			},
			{
				title: 'Create Transaction',
				route: '/dashboard/transaction/create'
			}
		]

	return (
		<DashboardPage
			goBackRoute={'/dashboard/transaction'}
			title={'Create Transaction'}
			linkList={createTransactionLinkList}
		>
			<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
				<ContentStyle>
					<Stack spacing={3}>

						
					<RHFSelectFieldFilled
							required
							title="Select a user"
							sx={{ width: '900px', alignSelf: 'left' }}
							name="name"
							onChange={(item:any)=>
							{
								if(!item || typeof item !== 'string') setFilter("");
								setFilter(item);
							}}
							options={usersOptions}
							errors={errors}
							setvalue={(item:any)=>{setValue("name", item)}}
						/>

						<RHFTextFieldFilled
							required
							disabled={!getValues("name")}
							sx={{
								width: '900px',
								alignSelf: 'left'
							}}
							max={user?.balance}
							type="number"
							name="amount"
							title="Amount"
							setvalue={(item:any)=>{setValue("amount", item)}}
						/>
						
					</Stack>

					<ButtonBoxStyle>

						<Button
							type="submit"
							variant="contained"
							sx={{ alignSelf: 'center', width: '380px', backgroundColor: '#F3D142' }}
						>
							{'Add transaction'}
						</Button>

						<Button
							color="error"
							sx={{ alignSelf: 'center', textDecoration: 'underline', marginLeft: '50px' }}
							onClick={() => navigate('/dashboard/transaction')}
						>
							Cancel
						</Button>
					</ButtonBoxStyle>
				</ContentStyle>
			</FormProvider>
		</DashboardPage>
	)
}

export { CreateTransactionForm }
