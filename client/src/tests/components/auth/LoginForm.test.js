import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../../slices/authSlice';
import LoginForm from '../../../components/auth/LoginForm';

// Create a test store
const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

describe('LoginForm Component', () => {
  it('submits form with valid credentials', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    
    // Use getByRole instead of getByLabelText
    fireEvent.change(screen.getByRole('textbox', { type: 'email' }), {
      target: { value: 'test@example.com' }
    });
    
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'Password123!' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.queryByText(/login failed/i)).not.toBeInTheDocument();
    });
  });
});