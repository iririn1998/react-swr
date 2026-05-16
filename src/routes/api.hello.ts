import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: async () =>
        new Response('Hello World', {
          headers: { 'Content-Type': 'text/plain' },
        }),
    },
  },
})
