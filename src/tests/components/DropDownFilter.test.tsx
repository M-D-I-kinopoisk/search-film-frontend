import DropDownFilter from "@/components/Header/DropDown/DropDownFilter/DropDownFilter";
import {  render, screen } from "@testing-library/react";

describe("DropDownFilter", () => {
    it("DropDownFilter renders without crashing ", () => {
        const list = {
            genres: [{ nameRU: 'тестовый жанр', href: 'ссылка' }],
            country: [{ name: 'тестовая страна', href: 'ссылка' }],
            years: [{ name: 'тестовый год', href: 'ссылка' }]
        }

        const component = render(<DropDownFilter list={list} />);
        expect(component).toMatchSnapshot();
        const lists = screen.getAllByRole('list')
        expect(lists).toHaveLength(3);
        const testGenre = screen.getByText('тестовый жанр')
        const testCountry = screen.getByText('тестовая страна')
        const testYear = screen.getByText('тестовый год')
        expect(testGenre).toBeInTheDocument();
        expect(testCountry).toBeInTheDocument();
        expect(testYear).toBeInTheDocument();

    });
});
