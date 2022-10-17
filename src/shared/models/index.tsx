import React from 'react'

type LayoutProps = {
	children: React.ReactNode
}

type GenericResponse = {
	status: string
	message: string
}

export type { LayoutProps, GenericResponse }
