import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return new Response('Hello World', {
          headers: { 'Content-Type': 'text/plain' },
        })
      },
    },
  },
})
