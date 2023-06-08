import AdminFilms from '@/components/Admin/AdminFilms/AdminFilms';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react'

describe('AdminFilms component', () => {
    test('renders input and button', () => {
        render(
            //     <SessionProvider
            //     session={{
            //       expires: "1",
            //       user: { email: "a", name: "Delta", image: "c" },
            //     }}
            //   >
            //     <Omega />
            //   </Provider>
            <SessionProvider session={{
                user: {
                    name: 'John Doe',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
                },
                expires: '2023-06-08T12:00:00.000Z',
            }}>  <AdminFilms /></SessionProvider>
        );
        const input = screen.getByLabelText('Введите полное название фильма');
        expect(input).toBeInTheDocument();

        const button = screen.getByRole('button', { name: 'Поиск' });
        expect(button).toBeInTheDocument();
    });
});