import NavBar from '../components/Header/NavBar/NavBar'

import {Meta, StoryObj} from '@storybook/react'



const meta: Meta<typeof NavBar> = {
    title: 'Components/NavBar',
    component: NavBar,
    tags: ['autodocs'],
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

type Story = StoryObj<typeof NavBar>;



export const navBar: Story = {}