import Footer from '../components/Footer/Footer'

import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        backgrounds: {
            default: 'ivi',
            values: [
                {
                    name: 'ivi',
                    value: '#100e19',
                },
                {
                    name: 'light',
                    value: 'white',
                },
            ],
        },
    },
}
export default meta

type Story = StoryObj<typeof Footer>;


export const footer: Story = {}