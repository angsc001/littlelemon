import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home';

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
   });

   it('Check if UX is properly establish', () => {
    render(
      <App initialEntries={['/']}>
        <Home />
      </App>
    );
      const submitButton = screen.getByTestId('submitbutton');
      //expect(submitButton).toBeDisabled();
      const inputElement = screen.getByTestId('date-input');
      fireEvent.change(inputElement, { target: { value: '2024-05-10' } });
      expect(submitButton).toBeEnabled();
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
      expect(updateTimes .value).toBe('15:00 AM')
   });


});
