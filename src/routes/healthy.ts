import Elysia, { t } from 'elysia'

export const healthy = new Elysia({
  prefix: '/health',
  tags: ['Health'],
}).get(
  '/',
  () => {
    return {
      status: 'OK' as const,
    }
  },
  {
    response: t.Object({
      status: t.Literal('OK'),
    }),
  },
)
