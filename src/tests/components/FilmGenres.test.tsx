import FilmGenres from '@/components/Film/FilmGenres/FilmGenres';
import { render, screen } from '@testing-library/react';

const genres = [
  { id: '1', nameRU: 'Жанр 1', nameEN: 'genre1' },
  { id: '2', nameRU: 'Жанр 2', nameEN: 'genre2' },
  { id: '3', nameRU: 'Жанр 3', nameEN: 'genre3' },
];

describe('FilmGenres', () => {
  it('should render genres', () => {
    render(<FilmGenres genres={genres} />);
    genres.forEach((genre) => {
      expect(screen.getByText(genre.nameRU)).toBeInTheDocument();
    });
  });

  it('should render links to movie pages', () => {
    render(<FilmGenres genres={genres} />);
    genres.forEach((genre) => {
      const link = screen.getByText(genre.nameRU).closest('a');
      expect(link).toHaveAttribute('href', `/movies/${genre.nameEN}`);
    });
  });
});