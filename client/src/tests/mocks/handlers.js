import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:5000/api/businesses/featured', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Test Business',
          description: 'Test Description',
          rating: 4.5
        }
      ])
    );
  }),

  rest.post('http://localhost:5000/api/auth/login', (req, res, ctx) => {
    return res(
      ctx.json({
        token: 'test-token',
        user: {
          id: 1,
          email: 'test@example.com'
        }
      })
    );
  })
];
