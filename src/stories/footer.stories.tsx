import Footer from '../components/Footer/Footer'

import {Meta, StoryObj} from '@storybook/react'
import {NextIntlClientProvider} from 'next-intl'
import messages from '../messages/ru.json'
import {SessionProvider} from 'next-auth/react'

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

type Story = StoryObj<typeof Footer>;


export const footer: Story = {}