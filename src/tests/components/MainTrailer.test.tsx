import React from 'react'
import { render, screen } from '@testing-library/react'
import MainTrailer from '../../components/Film/FilmMainTrailer/MainTrailer'
import { NextIntlProvider } from 'next-intl'

describe('MainTrailer', () => {
    const filmInfo = {
        trailerLink: 'https://www.youtube.com/embed/123456',
        text: ''
    }

    const testFilm = {
        id: 123,
        imageName: '',
        country: { nameRU: 'countrynameRU', nameEN: 'countrynameRU' },
        year: 2021,
        rating: 8,
        ageRating: '16+',
        duration: 120,
        nameRU: 'Тестовый фильм',
        nameEN: 'Название на английском',
        genres: [{ id: '1', nameRU: 'драма', nameEN: 'nameEN' },
        { id: '2', nameRU: 'комедия', nameEN: 'nameEN' }],
        countRating: 100,
    }

    it('should render the trailer', () => {
        render(
            <NextIntlProvider messages={{
                'MainFilmInfo': {
                    'title': 'Фильм',
                    'text': 'Рус'
                }
            }} locale={'ru'}>
                <MainTrailer filmInfo={filmInfo} film={testFilm} />
            </NextIntlProvider>
        )
        const trailer = screen.getByText('Трейлер')
        expect(trailer).toBeInTheDocument()
    })

    it('should render the marker and share buttons', () => {
        render(<NextIntlProvider messages={{
            'MainFilmInfo': {
                'title': 'Фильм',
                'text': 'Рус'
            }
        }} locale={'ru'}>
            <MainTrailer filmInfo={filmInfo} film={testFilm} />
        </NextIntlProvider>)
        const userButtons = screen.getAllByTestId('user-button')
        expect(userButtons).toHaveLength(4)
    })

    it('should render the free films button', () => {
        render(<NextIntlProvider messages={{
            'MainFilmInfo': {
                'title': 'Фильм',
                'text': 'Рус'
            }
        }} locale={'ru'}>
            <MainTrailer filmInfo={filmInfo} film={testFilm} />
        </NextIntlProvider>)
        const freeFilmsButton = screen.getByText('Бесплатные фильмы')
        expect(freeFilmsButton).toBeInTheDocument()
    })
})