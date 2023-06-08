import React from 'react';
import { render, screen } from '@testing-library/react';
import ActorFilms from '../../components/Actor/ActorFilms' 

describe('ActorFilms', () => {
  const actorFilms = [
    {
      profession: {
        nameEN: 'actor',
        nameRU: 'Актер'
      },
      film: {
        year: 2021,
        nameRU: 'Фильм',
        rating: 8.5,
        imageName: 'film.png',
        id: '1'
      }
    }
  ];

  it('renders title', () => {
    render(<ActorFilms actorFilms={actorFilms} />);
    const titleElement = screen.getByText('Полная фильмография');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders profession list', () => {
    render(<ActorFilms actorFilms={actorFilms} />);
    const professionElement = screen.getByText('Актер');
    expect(professionElement).toBeInTheDocument();
  });

  it('renders film list', () => {
    render(<ActorFilms actorFilms={actorFilms} />);
    const filmElement = screen.getByText('Фильм');
    expect(filmElement).toBeInTheDocument();
  });
});