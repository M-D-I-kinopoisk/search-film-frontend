import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs'
export default {
    title: 'UI/Breadcrumbs',
    component: Breadcrumbs,
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
    },
}

const Template = (arg) => <Breadcrumbs {...arg}/>

export const Default = Template.bind({})
Default.args = {
    title: 'Привет, СториБук!'
}
