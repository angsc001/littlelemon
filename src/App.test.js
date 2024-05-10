import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Booking from './Booking.js';
import Home from './Home';
import BookingForm from './component/BookingForm';

describe('navigates to the correct route', () => {
  it('renders without crashing', () => {
    render(
      <App initialEntries={['/']}>
        <Home />
      </App>
    );
    expect(screen.getByText('LITTLE LEMON')).toBeInTheDocument();
  });

  it('navigates to the correct route', () => {
    render(
      <App initialEntries={['/']}>
        <Home />
      </App>
    );
      fireEvent.click(screen.getByText('Reserve a Table'));
      expect(screen.getByText('Choose date')).toBeInTheDocument();
      const inputElement = screen.getByTestId('date-input');
      const initializeTimes  = screen.getByTestId('time-input');
      expect(initializeTimes.value).toBe('10:00 AM');
      fireEvent.change(inputElement, { target: { value: '2024-05-10' } });
      expect(inputElement.value).toBe('2024-05-10');
      const updateTimes   = screen.getByTestId('time-input');
      expect(updateTimes .value).toBe('10:30 AM')
   });

   it('Check initial times', () => {
    render(
      <App initialEntries={['/']}>
        <Home />
      </App>
    );
      const initializeTimes  = screen.getByTestId('time-input');
      expect(initializeTimes.value).toBe('10:00 AM');
   });

   it('Check after weekdays is pressed', () => {
    render(
      <App initialEntries={['/']}>
        <Home />
      </App>
    );
      const inputElement = screen.getByTestId('date-input');
      fireEvent.change(inputElement, { target: { value: '2024-05-10' } });
      const updateTimes   = screen.getByTestId('time-input');
      expect(updateTimes .value).toBe('10:30 AM')
   });
});
