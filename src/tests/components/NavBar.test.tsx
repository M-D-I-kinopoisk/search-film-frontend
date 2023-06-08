import NavBar from "@/components/Header/NavBar/NavBar";
import { render, screen } from "@testing-library/react";

describe("NavBar", () => {
    it("NavBar renders without crashing ", () => {
        const component = render(<NavBar
            handleMouseEnter={jest.fn()}
            handleMouseLeave={jest.fn()} />);
        expect(component).toMatchSnapshot();
        const links = screen.getAllByRole("link")
        expect(links).toHaveLength(6);
    });
});