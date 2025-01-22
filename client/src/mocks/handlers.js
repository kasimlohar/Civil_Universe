import { rest } from 'msw';

export const handlers = [
  // Auth endpoints
  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(ctx.json({
      token: 'fake-jwt-token',
      user: { id: 1, name: 'Test User', email: 'test@example.com' }
    }));
  }),

  // Business endpoints
  rest.get('/api/businesses/featured', (req, res, ctx) => {
    return res(ctx.json([
      {
        id: 1,
        name: 'Premier Construction',
        rating: 4.5,
        imageUrl: '/images/businesses/construction-1.jpg'
      }
    ]));
  }),

  // Booking endpoints
  rest.get('/api/bookings/:id', (req, res, ctx) => {
    return res(ctx.json({
      id: req.params.id,
      status: 'confirmed',
      date: new Date().toISOString()
    }));
  })
];
