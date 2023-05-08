import Input from './Input'

import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
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
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        type: {
            type: 'string',
            description: 'Вариант скрытого текст или открытого',
            options: ['text', 'password'],
            control: {type: 'radio'}
        }
    }
}

export default meta

const Template = (args) => <Input {...args} />
export const Search = Template.bind({})
Search.args = {
    label: 'Актеры',
    type: 'text',
    search: true
}

export const Login = Template.bind({})
Login.args = {
    label: 'Через email или телефон',
    type: 'text',
    login: true
}

export const Password = Template.bind({})
Password.args = {
    label: 'Введите пароль',
    type: 'password',
    password: true
}