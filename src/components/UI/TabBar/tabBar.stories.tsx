import TabBar from './TabBar'

import {Meta, StoryObj} from '@storybook/react'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'


const meta: Meta<typeof TabBar> = {
    title: 'UI/TabBar',
    component: TabBar,
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
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone5'
        },
    },
}
export default meta

type Story = StoryObj<typeof TabBar>;



export const tabBar: Story = {}