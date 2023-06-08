import HeaderBanner from '@/components/Header/HeaderBaner/HeaderBanner';
import { render, screen, fireEvent } from '@testing-library/react';

describe('HeaderBanner component', () => {
  test('shows and hides subscription details block on mouse hover', () => {
    render(<HeaderBanner />);
    const topBlockElement = screen.getByTestId('headerBanner__topBlock');
    const detailsBlockElement = screen.getByTestId('headerBanner__detailsBlock');
    expect(detailsBlockElement).not.toHaveClass('headerBanner__detailsBlock_active]');
    fireEvent.mouseEnter(topBlockElement);
    expect(detailsBlockElement).toHaveClass('headerBanner__detailsBlock_active');
    fireEvent.mouseLeave(topBlockElement);
    expect(detailsBlockElement).not.toHaveClass('headerBanner__detailsBlock_active');
  });

  test('renders slider images', () => {
    render(<HeaderBanner />);
    const sliderImages = screen.getAllByAltText(/film/i);
    expect(sliderImages).toHaveLength(12);
  });
})
