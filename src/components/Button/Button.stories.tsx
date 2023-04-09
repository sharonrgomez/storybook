import React from 'react'
import {Story} from '@storybook/react'

import Button, {ButtonProps} from './Button'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		onClick: {
			action: 'click',
		},
		children: {
			control: 'text',
		},
		size: {
			control: {
				type: 'radio',
				options: ['small', 'medium', 'large'],
			},
		},
	},
	args: {
		children: 'Button',
	},
}

const Template: Story<ButtonProps> = (props) => <Button {...props} />

export const Standard = Template.bind({})
Standard.args = {
	children: 'Button',
	variant: 'standard',
}

export const Primary = Template.bind({})
Primary.args = {
	children: 'Button',
	variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Button',
	variant: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
	children: 'Button',
	variant: 'danger',
}

export const Small = Template.bind({})
Small.args = {
	children: 'Button',
	size: 'small',
}

export const Large = Template.bind({})
Large.args = {
	children: 'Button',
	size: 'large',
}
