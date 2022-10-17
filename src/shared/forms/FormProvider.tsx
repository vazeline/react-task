import React from 'react'
import { FormProvider as Form } from 'react-hook-form'

type FormProviderProps = {
	children: React.ReactNode
	onSubmit?: React.FormEventHandler<HTMLFormElement>;
	methods: any
}

const FormProvider = ({ children, onSubmit, methods }: FormProviderProps) => {
	return (
		<Form {...methods}>
			<form onSubmit={onSubmit}>{children}</form>
		</Form>
	)
}

export { FormProvider }
