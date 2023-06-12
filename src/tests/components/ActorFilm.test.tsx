import React from 'react'
import {render, screen} from '@testing-library/react'
import ActorFilm from '../../components/Actor/ActorFilm/ActorFilm'

describe('ActorFilm', () => {
    const item = {
        film: {
            year: 2021,
            nameRU: 'Фильм',
            rating: 8.5,
            imageName: 'film.png',
            id: '1'
        },
        profession: {
            nameRU: 'Андрей',
            nameEN: 'andrew',
        }
    }

    it('renders film name', () => {
        render(<ActorFilm item={item}/>)
        const nameElement = screen.getByText(item.film.nameRU)
        expect(nameElement).toBeInTheDocument()
    })

    it('renders fallback image when image is not loaded', () => {
        render(<ActorFilm item={item}/>)
        const fallbackImage = screen.getByAltText('Фильм')
        expect(fallbackImage).toBeInTheDocument()
    })
})