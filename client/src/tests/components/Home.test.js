import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Home from '../../pages/Home';

describe('Home Component', () => {
  const renderHome = () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  };

  test('renders main sections', () => {
    renderHome();
    expect(screen.getByText(/Find Trusted/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Businesses/i)).toBeInTheDocument();
  });

  test('search functionality works', () => {
    renderHome();
    const searchInput = screen.getByPlaceholderText(/Search for services/i);
    fireEvent.change(searchInput, { target: { value: 'construction' } });
    expect(searchInput.value).toBe('construction');
  });
});
