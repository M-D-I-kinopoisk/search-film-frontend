import ActorFilm from '../components/Actor/ActorFilm/ActorFilm'

export default {
    title: 'Components/ActorFilm',
    component: ActorFilm,
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

const Template = (arg) => <ActorFilm {...arg}/>

export const Default = Template.bind({})
Default.args = {
    item: {
        film: {
            id: '2',
            rating: 9,
            nameRU: 'Сторибук Фильм',
            year: 2001,
            imageName: '689.jpg'
        }
    }
}
