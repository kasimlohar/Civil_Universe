import React from 'react';
import { render, screen, act } from '@testing-library/react';
import RotatingTagline from '../../components/RotatingTagline';

describe('RotatingTagline', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('rotates through taglines', () => {
    render(<RotatingTagline />);
    
    expect(screen.getByText(/Construction Services/i)).toBeInTheDocument();
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    expect(screen.getByText(/Architects & Designers/i)).toBeInTheDocument();
  });
});
