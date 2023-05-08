import {Input} from './Input'

import './input.module.scss'

export default {
    title: 'UI/Input',
    component: Input,
    argTypes: {
        type: {
            type: 'string',
            description: 'Вариант скрытого текст или открытого',
            options: ['text', 'password'],
            control: {type: 'radio'}
        }
    }
}

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