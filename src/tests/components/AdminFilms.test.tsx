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
});