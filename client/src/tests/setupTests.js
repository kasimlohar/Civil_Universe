import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  };
};
