import Locales from './Locales'

import {Meta, StoryObj} from '@storybook/react'
import {userEvent, within} from '@storybook/testing-library'


const meta: Meta<typeof Locales> = {
    title: 'UI/Locales',
    component: Locales,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        ),
    ],
    parameters : {
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
type Story = StoryObj<typeof Locales>;

export const EnLang: Story = {
    parameters: {
        nextjs: {
            router: {
                locale : 'en',
            },
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const loginButton = await canvas.getByText('RU', {

        })
        await userEvent.click(loginButton)

    },
}

export const RuLang: Story = {
    parameters: {
        actions: {
            handles: ['mouseover', 'click .btn'],
        },
        nextjs: {
            router: {
                locale : 'ru',
                basePath: '/profile',
            },
        }
    },
}



