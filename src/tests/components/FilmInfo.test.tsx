import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilmInfo from '../../components/Film/FilmInfo/FilmInfo'
import { NextIntlProvider } from "next-intl";

describe('FilmInfo', () => {
  const film = {
    id: 1,
    imageName: '',
    country: { nameRU: 'countrynameRU', nameEN: '' },
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
  const filmInfo = {
    trailerLink: 'https://example.com/trailer',
    text: 'Описание фильма',
  };
  const actors = [
    {
      member: {
        id: 2,
        nameEN: 'nameEN',
        nameRU: 'nameRU',
        imageName: 'https://vk.com/images/camera_100.png'
      },
      profession: {
        nameRU: 'nameRU',
        nameEN: 'profession'
      },
      id: '1'
    }
  ]

  const rederedComponent = <NextIntlProvider
    messages={{
      "FilmInfo": {
        "title": "Рейтинг Иви",
        "btn": "Трейлер",
        "btn2": "Бесплатные фильмы",
        "toggle": "Свернуть детали",
        "toggle1": "Детали о фильме",
        "toggle2": "Свернуть",
        "toggle3": "Читать дальше",
        "title1": "Интересный сюжет",
        "title2": "Оценить"
      },
      "MainFilmInfo": {
        "title": "Фильм",
        "text": "Рус"
      }
    }}
    locale={'ru'}>
    <FilmInfo film={film} filmInfo={filmInfo} actors={actors} />
  </NextIntlProvider>

  it('should render InfoContent component with expected props', () => {
    render(rederedComponent);
    expect(screen.getByText('Бесплатные фильмы')).toBeInTheDocument();
    expect(screen.getByText('Детали о фильме')).toBeInTheDocument();
    expect(screen.getByText('Оценить')).toBeInTheDocument();
  });

  it('should toggle visibility of WatchOptions on click', () => {
    render(rederedComponent);
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