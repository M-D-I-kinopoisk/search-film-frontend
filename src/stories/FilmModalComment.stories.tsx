import FilmModalComment from '../components/Film/FilmModal/FilmModalComments/FilmModalCommentItem/FilmModalCommentItem'

export default {
    title: 'Components/FilmModalComments',
    component: FilmModalComment,
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

const Template = (arg) => <FilmModalComment {...arg}/>

export const Default = Template.bind({})
Default.args = {
    comment: {
        created_at: '',
        profile: {
            profileName: 'Серега'
        },
        text: 'пишу свой первый комментарий... безумно волнуюсь!!!!'
    }
}
