import React from 'react';
import { render, screen, act } from '@testing-library/react';
import RotatingTagline from '../../components/RotatingTagline';

jest.useFakeTimers();

describe('RotatingTagline', () => {
  it('shows initial tagline', () => {
    render(<RotatingTagline />);
    expect(screen.getByText(/Construction Services/i)).toBeInTheDocument();
  });

  it('rotates to next tagline', async () => {
    render(<RotatingTagline />);
    
    // Wait for first transition
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Need to wait for fade out/in
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.getByText(/Architects & Designers/i)).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
});
