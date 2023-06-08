import TabBar from '../components/UI/TabBar/TabBar'

import {Meta, StoryObj} from '@storybook/react'

import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {SessionProvider} from 'next-auth/react'
import {NextIntlClientProvider} from 'next-intl'
import messages from '../messages/ru.json'



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
    decorators: [
        (Story) => (
            <NextIntlClientProvider locale={'ru'} messages={messages}>
            <SessionProvider>
                <Story />
            </SessionProvider>
            </NextIntlClientProvider>
        ),
    ],
}
export default meta

type Story = StoryObj<typeof TabBar>;


export const tabBar: Story = {}