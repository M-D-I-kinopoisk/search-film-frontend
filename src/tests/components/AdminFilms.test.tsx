import AdminFilms from '@/components/Admin/AdminFilms/AdminFilms';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AdminFilms component', () => {
    test('renders input and button', () => {
        render(<AdminFilms />);
        const input = screen.getByLabelText('Введите полное название фильма');
        expect(input).toBeInTheDocument();

        const button = screen.getByRole('button', { name: 'Поиск' });
        expect(button).toBeInTheDocument();
    });

    // test('searches for a film by name', async () => {
    //     const mockedData = [
    //         {
    //             id: 1,
    //             nameRU: 'Название RU',
    //             nameEN: 'Name EN',
    //             year: 2021,
    //             ageRating: '16+',
    //             duration: 120,
    //             idCountry: 1,
    //             arrIdGenres: [1, 2, 3],
    //         },
    //     ];
    //     const mockResponse = new Response(JSON.stringify(mockedData), {
    //         status: 200,
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     });
    //     jest.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse);
    //     render(<AdminFilms />);
    //     const input = screen.getByLabelText('Введите полное название фильма');
    //     userEvent.type(input, 'Название RU');
    //     const button = screen.getByRole('button', { name: 'Поиск' });
    //     userEvent.click(button);
    //     await waitFor(() => {
    //         expect(screen.getByText('Название RU')).toBeInTheDocument();
    //     });
    // });

    // test('changes film name', async () => {
    //     const mockedData = [
    //         {
    //             id: 1,
    //             nameRU: 'Название RU',
    //             nameEN: 'Name EN',
    //             year: 2021,
    //             ageRating: '16+',
    //             duration: 120,
    //             idCountry: 1,
    //             arrIdGenres: [1, 2, 3],
    //         },
    //     ];
    //     const mockResponse = new Response(JSON.stringify(mockedData), {
    //         status: 200,
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     });
    //     jest.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse);
    //     render(<AdminFilms />);
    //     const input = screen.getByLabelText('Введите полное название фильма');
    //     userEvent.type(input, 'Название RU');
    //     const button = screen.getByRole('button', { name: 'Поиск' });
    //     userEvent.click(button);
    //     const changeButton = screen.getByRole('button', { name: 'Изменить название' });
    //     userEvent.click(changeButton);
    //     const nameRUInput = screen.getByLabelText('Новое название EN');
    //     const nameENInput = screen.getByLabelText('Новое название RU');
    //     userEvent.type(nameRUInput, 'New name EN');
    //     userEvent.type(nameENInput, 'Новое название RU');
    //     const confirmButton = screen.getByRole('button', { name: 'Подтвердить' });
    //     userEvent.click(confirmButton);
    //     await waitFor(() => {
    //         expect(global.fetch).toHaveBeenCalledWith(
    //             'http://localhost:12120/api/films',
    //             expect.objectContaining({
    //                 method: 'PUT',
    //                 body: expect.stringContaining('"nameRU":"New name EN","nameEN":"Новое название RU"'),
    //             })
    //         );
    //     });
    // });

    // test('displays a message when film is not found', async () => {
    //     const mockResponse = new Response(JSON.stringify([]), {
    //         status: 200,
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     });
    //     jest.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse);
    //     render(<AdminFilms />);
    //     const input = screen.getByLabelText('Введите полное название фильма');
    //     userEvent.type(input, 'Несуществующий фильм');
    //     const button = screen.getByRole('button', { name: 'Поиск' });
    //     userEvent.click(button);
    //     await waitFor(() => {
    //         expect(screen.getByText('Фильм не найден, введите другое название')).toBeInTheDocument();
    //     });
    // });
});