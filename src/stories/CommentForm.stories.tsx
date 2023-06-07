import CommentForm from '../components/UI/CommentForm/CommentForm'
import {SessionProvider} from 'next-auth/react'

export default {
    title: 'UI/CommentForm',
    component: CommentForm,
    parameters: {
        backgrounds: {
            default: 'ivi',
            values: [
                {
                    name: 'ivi',
                    value: '#100e19',
                }
            ],
        },
    }
}

const Template = (arg) => <SessionProvider><CommentForm {...arg}/></SessionProvider>

export const Default = Template.bind({})
