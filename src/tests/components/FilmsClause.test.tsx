import { render, screen, fireEvent } from '@testing-library/react';
import FilmsClause from '@/components/Home/FilmsClause/FilmsClause';

describe('FilmsClause', () => {
    test('renders header text', () => {
        render(<FilmsClause />);
        const header = screen.getByText(/Онлайн-кинотеатр Иви/i);
        expect(header).toBeInTheDocument();
    });

    test('renders toggle button', () => {
        render(<FilmsClause />);
        const toggleButton = screen.getByText(/развернуть/i);
        expect(toggleButton).toBeInTheDocument();
    });

    test('renders inner text when toggle button is clicked', () => {
        render(<FilmsClause />);
        const toggleButton = screen.getByText(/развернуть/i);
        fireEvent.click(toggleButton);
        const innerText = screen.getByText(/Видеотека Иви/i);
        expect(innerText).toBeInTheDocument();
    });

    test('hides inner text when toggle button is clicked twice', () => {
        render(<FilmsClause />);
        const toggleButton = screen.getByText(/развернуть/i);
        fireEvent.click(toggleButton);
        fireEvent.click(toggleButton);
        const innerText = screen.queryByText(/Видеотека Иви/i);
        expect(innerText).not.toBeInTheDocument();
    });
});