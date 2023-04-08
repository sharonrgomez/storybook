import React from 'react'

import Button from './Button'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	label: 'Button',
}
Primary.displayName = 'Primary'

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'Button',
}
Secondary.displayName = 'Secondary'

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	label: 'Button',
}
Large.displayName = 'Large'

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	label: 'Button',
}
Small.displayName = 'Small'
