import {fireEvent, render, screen} from '@testing-library/react'
import Footer from '../../components/Footer/Footer'
import {NextIntlProvider} from 'next-intl'

describe('Footer', () => {
    it('"Написать в чате" button renders ', () => {
        const component = render(
            <NextIntlProvider messages={{
                'footer': {
                    'item1': {
                        'title': 'Мой Иви',
                        'text1': 'О компании',
                        'text2': 'Вакансии',
                        'text3': 'Программа бета-тестирования',
                        'text4': 'Информация для партнёров',
                        'text5': 'Размещение рекламы',
                        'text6': 'Пользовательское соглашение',
                        'text7': 'Политика конфиденциальности',
                        'text8': 'Комплаенс'
                    },
                    'item2': {
                        'title': 'Разделы',
                        'text1': 'Мой Иви',
                        'text2': 'Что нового',
                        'text3': 'Фильмы',
                        'text4': 'Сериалы',
                        'text5': 'Мультфильмы',
                        'text6': 'TV+',
                        'text7': 'Что посмотреть',
                        'text8': 'Активация сертификата'
                    },
                    'item3': {
                        'title': 'Служба поддержки',
                        'text1': 'Мы всегда готовы вам помочь.',
                        'text2': 'Наши операторы онлайн 24/7',
                        'text3': 'Написать в чате',
                        'text4': 'Ответы на вопросы'
                    },
                    'item4': {
                        'title': 'Смотрите фильмы, сериалы и мультфильмы без рекламы'
                    },
                    'item5': {
                        'text1': 'Загрузить в',
                        'text2': 'Доступно в',
                        'text3': 'Смотрите на',
                        'text4': 'Все устройства'
                    }
                },
            }} locale={'ru'}>
                <Footer/>
            </NextIntlProvider>)
        expect(component).toMatchSnapshot()
        const chatBtn = screen.getByText('Написать в чате')
        expect(chatBtn).toBeInTheDocument()
    })
})