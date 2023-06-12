import NavBar from '../../components/Header/NavBar/NavBar'
import { render, screen } from '@testing-library/react'
import { NextIntlProvider } from 'next-intl'

describe('NavBar', () => {
    it('NavBar renders without crashing ', () => {
        const component = render(
            <NextIntlProvider messages={{
                'header': {
                    'title1': 'Мой Иви',
                    'title2': 'Что нового',
                    'title3': 'Фильмы',
                    'title4': 'Сериалы',
                    'title5': 'Мультфильмы',
                    'title6': 'TV+',
                    'title7': 'Оплатить подписку',
                    'title8': 'Поиск'
                },
            }} locale={'ru'}>
                <NavBar
                    handleMouseEnter={jest.fn()}
                    handleMouseLeave={jest.fn()} />
            </NextIntlProvider>
        )
        expect(component).toMatchSnapshot()
        const links = screen.getAllByRole('link')
        expect(links).toHaveLength(6)
    })
})