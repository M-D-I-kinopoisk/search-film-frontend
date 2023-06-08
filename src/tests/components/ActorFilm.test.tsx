import React from 'react';
import { render, screen } from '@testing-library/react';
import ActorFilm from '@/components/Actor/ActorFilm/ActorFilm';

describe('ActorFilm', () => {
    const film = {
        year: 2021,
        nameRU: 'Фильм',
        rating: 8.5,
        imageName: 'film.png',
        id: '1'
    };

    it('renders film name', () => {
        render(<ActorFilm item={{ film }} />);
        const nameElement = screen.getByText(film.nameRU);
        expect(nameElement).toBeInTheDocument();
    });

    it('renders fallback image when image is not loaded', () => {
        render(<ActorFilm item={{ film: { ...film, imageName: 'non-existent.png' } }} />);
        const fallbackImage = screen.getByAltText('Фильм');
        expect(fallbackImage).toBeInTheDocument();
    });
});