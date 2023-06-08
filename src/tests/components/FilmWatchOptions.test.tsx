import FilmWatchOptions from '@/components/Film/FilmWatchOptions/FilmWatchOptions';
import { render, screen } from '@testing-library/react';

const film = {
  rating: 7.8,
};

describe('FilmWatchOptions', () => {
  it('should render language options', () => {
    render(<FilmWatchOptions film={film} />);
    expect(screen.getByText('Языки')).toBeInTheDocument();
    expect(screen.getByText('Русский, Английский')).toBeInTheDocument();
  });

  it('should render subtitles options', () => {
    render(<FilmWatchOptions film={film} />);
    expect(screen.getByText('Субтитры')).toBeInTheDocument();
    expect(screen.getByText('Русский')).toBeInTheDocument();
  });

  it('should render picture and sound options', () => {
    render(<FilmWatchOptions film={film} />);
    expect(screen.getByText('Изображение и звук.')).toBeInTheDocument();
    expect(screen.getAllByText('FullHD')).toHaveLength(2)
    expect(screen.getAllByText('1080')).toHaveLength(2)
    expect(screen.getAllByText(film.rating.toFixed(1))).toHaveLength(2)
  });
});