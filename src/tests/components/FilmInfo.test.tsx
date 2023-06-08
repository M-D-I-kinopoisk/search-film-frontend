import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilmInfo, { infoContentProps } from '../../components/Film/FilmInfo/FilmInfo'

describe('FilmInfo', () => {
  const film: infoContentProps['film'] = {
    id: '1',
    imageName: '',
    country: { nameRU: 'countrynameRU' },
    year: 2021,
    rating: 8,
    ageRating: '16+',
    duration: 120,
    nameRU: 'Название на русском',
    nameEN: 'Название на английском',
    genres: [{ id: '1', nameRU: 'драма', nameEN: 'nameEN' },
    { id: '2', nameRU: 'комедия', nameEN: 'nameEN' }],
    countRating: 100,
  };
  const filmInfo: infoContentProps['filmInfo'] = {
    trailerLink: 'https://example.com/trailer',
    text: 'Описание фильма',
  };
  const actors = [
    {
      member: {
        id: '2',
        nameEN: 'nameEN',
        nameRU: 'nameRU',
        imageName: 'https://vk.com/images/camera_100.png'
      },
      profession: {
        nameRU: 'profession'
      },
      id: '1'
    }
  ]

  it('should render InfoContent component with expected props', () => {
    render(<FilmInfo film={film} filmInfo={filmInfo} actors={actors} />);
    expect(screen.getByText('Бесплатные фильмы')).toBeInTheDocument();
    expect(screen.getByText('Детали о фильме')).toBeInTheDocument();
    expect(screen.getByText('Оценить')).toBeInTheDocument();
  });

  it('should toggle visibility of WatchOptions on click', () => {
    render(<FilmInfo film={film} filmInfo={filmInfo} actors={actors} />);
    expect(screen.queryByText('Свернуть детали')).not.toBeInTheDocument();
    expect(screen.getByText('Детали о фильме')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Детали о фильме'));
    expect(screen.getByText('Свернуть детали')).toBeInTheDocument();
    expect(screen.queryByText('Детали о фильме')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Свернуть детали'));
    expect(screen.queryByText('Свернуть детали')).not.toBeInTheDocument();
    expect(screen.getByText('Детали о фильме')).toBeInTheDocument();
  });
});