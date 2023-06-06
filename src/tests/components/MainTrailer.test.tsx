import React from 'react';
import { render, screen } from '@testing-library/react';
import MainTrailer from '../../components/Film/FilmMainTrailer/MainTrailer';

describe('MainTrailer', () => {
    const filmInfo = {
        trailerLink: 'https://www.youtube.com/embed/123456'
    };

    it('should render the trailer', () => {
        render(<MainTrailer filmInfo={filmInfo} />);
        const trailer = screen.getByText('Трейлер');
        expect(trailer).toBeInTheDocument();
    });

    it('should render the marker and share buttons', () => {
        render(<MainTrailer filmInfo={filmInfo} />);
        const userButtons = screen.getAllByTestId('user-button');
        expect(userButtons).toHaveLength(4);
    });

    it('should render the free films button', () => {
        render(<MainTrailer filmInfo={filmInfo} />);
        const freeFilmsButton = screen.getByText('Бесплатные фильмы');
        expect(freeFilmsButton).toBeInTheDocument();
    });
});