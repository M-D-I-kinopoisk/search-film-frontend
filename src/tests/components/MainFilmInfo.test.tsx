import React from 'react'
import { render, screen } from '@testing-library/react'
import MainFilmInfo from '../../components/Film/FilmInfo/MainFilmInfo/MainFilmInfo'
import { NextIntlProvider } from 'next-intl'

describe('MainFilmInfo', () => {
    const film = {
        id: 1,
        imageName: 'https://vk.com/images/camera_100.png',
        country: { nameRU: 'Россия', nameEN: 'countrynameRU' },
        year: 2002,
        rating: 8,
        ageRating: '16+',
        duration: 120,
        nameRU: 'Бригада',
        nameEN: 'Brigada',
        genres: [{ id: '1', nameRU: 'драма', nameEN: 'drame' },
        { id: '2', nameRU: 'комедия', nameEN: 'comedy' }],
        countRating: 100,
    }

    it('should render MainInfo component with expected props', () => {
        render(
            <NextIntlProvider messages={{
                'MainFilmInfo': {
                    'title': 'Фильм',
                    'text': 'Рус'
                }
            }} locale={'ru'}>
                <MainFilmInfo film={film} />
            </NextIntlProvider>
        )
        expect(screen.getByText(`${film.nameRU} (Фильм ${film.year})`)).toBeInTheDocument()
        expect(screen.getByText(`${film.year} ${film.duration} минут ${film.ageRating}`)).toBeInTheDocument()
        expect(screen.getByText('драма')).toBeInTheDocument()
        expect(screen.getByText('комедия')).toBeInTheDocument()
        expect(screen.getByText('FullHD')).toBeInTheDocument()
    })
})