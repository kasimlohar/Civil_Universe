import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';
import Home from '../../pages/Home';

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe('Home Component', () => {
  test('renders main sections', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(/Featured Businesses/i)).toBeInTheDocument();
  });
});
