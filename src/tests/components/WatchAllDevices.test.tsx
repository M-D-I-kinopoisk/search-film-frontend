import WatchAllDevices from '../../components/Film/WatchAllDevices/WatchAllDevices'
import { render, screen } from '@testing-library/react'

const film = {
  id: 123,
  imageName: '',
  country: { nameRU: 'countrynameRU', nameEN: 'countrynameRU' },
  year: 2021,
  rating: 8,
  ageRating: '16+',
  duration: 120,
  nameRU: 'Тестовый фильм',
  nameEN: 'Название на английском',
  genres: [{ id: '1', nameRU: 'драма', nameEN: 'nameEN' },
  { id: '2', nameRU: 'комедия', nameEN: 'nameEN' }],
  countRating: 100,
}

describe('WatchAllDevices', () => {
  it('should render title and description', () => {
    render(<WatchAllDevices film={film} />)
    expect(screen.getByText(`Cмотреть «${film.nameRU}» на всех устройствах`)).toBeInTheDocument()
    expect(screen.getByText('Приложение доступно для скачивания на iOS, Android, SmartTV и приставках')).toBeInTheDocument()
  })

  it('should render connect button', () => {
    render(<WatchAllDevices film={film} />)
    expect(screen.getByText('Подключить устройства')).toBeInTheDocument()
  })

  it('should render device images', () => {
    render(<WatchAllDevices film={film} />)
    expect(screen.getByAltText('tvFrame')).toBeInTheDocument()
    expect(screen.getByAltText('ipadFrame')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})