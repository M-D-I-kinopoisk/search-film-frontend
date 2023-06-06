import { fireEvent, render, screen } from "@testing-library/react";
import Footer from '../../components/Footer/Footer'

describe("Footer", () => {
    it("\"Написать в чате\" button renders ", () => {
        const component = render(<Footer />);
        expect(component).toMatchSnapshot();
        const chatBtn = screen.getByText("Написать в чате")
        expect(chatBtn).toBeInTheDocument();
    });
});