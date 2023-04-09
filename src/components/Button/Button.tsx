import React from 'react'
// import PropTypes from 'prop-types'
import './button.css'

export interface ButtonProps {
	/** The content of the button */
	children?: React.ReactNode
	/** If true, displays a smaller button with less padding */
	compact?: boolean
	/** If true, the button will take up the full width of its container */
	fullWidth?: boolean
	/** If true, the button will be disabled */
	disabled?: boolean
	/** Event handler for when the button is clicked */
	onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
	/** The size of the button */
	size?: 'small' | 'medium' | 'large'
	/** If true, the button will be displayed without a background or border */
	textOnly?: boolean
	/** The variant of the button */
	variant?: 'primary' | 'secondary' | 'standard' | 'danger'
}
/**
 * Primary UI component for user interaction
 */
const Button = (props: ButtonProps) => {
	const {
		children,
		compact = false,
		fullWidth = false,
		disabled = false,
		onClick,
		size = 'medium',
		textOnly = false,
		variant = 'standard',
		...rest
	} = props

	return (
		<button
			type='button'
			className={['button', `button-${size}`, `button-${variant}`].join(' ')}
			{...rest}
		>
			{children}
		</button>
	)
}

Button.displayName = 'Button'

export default Button
