import React from 'react'
import styled from 'styled-components'

interface InfoProps {
	placeholder: string
	onChange: any
	width?: string
}

const Input = styled.input<InfoProps>`
	width: ${({ width }) => (width ? width : '100%')};
	border: none;
	font-size: 1.5rem;
	background: papayawhip;
`
export const Info: React.FC<InfoProps> = ({ ...args }) => {
	return (
		<Input
			type='text'
			onChange={args.onChange}
			placeholder={args.placeholder}
		/>
	)
}
