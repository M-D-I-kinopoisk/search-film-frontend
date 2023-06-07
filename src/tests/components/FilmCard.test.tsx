import FilmCard from '@/components/FilmCard/FilmCard';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux'
import * as actions from '@/redux/FilmsSlice'

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

const testFilm = {
  id: '123',
  imageName: '',
  country: { nameRU: 'countrynameRU' },
  year: 2021,
  rating: 8,
  ageRating: '16+',
  duration: 120,
  nameRU: 'Тестовый фильм',
  nameEN: 'Название на английском',
  genres: [{ id: '1', nameRU: 'драма', nameEN: 'nameEN' },
  { id: '2', nameRU: 'комедия', nameEN: 'nameEN' }],
  countRating: 100,
};

test('calls dispatch on mouse enter', () => {
  mockedUseSelector.mockReturnValue('123')
  const dispatchMock = jest.fn();
  mockedDispatch.mockReturnValue(dispatchMock);
  render(<FilmCard film={testFilm} />);
  const linkElement = screen.getByRole('link');
  fireEvent.mouseEnter(linkElement);
  expect(dispatchMock).toHaveBeenCalledWith({ type: 'films/getFilmId', payload: testFilm.id });
});