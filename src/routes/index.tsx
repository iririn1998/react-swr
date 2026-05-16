import { createFileRoute } from '@tanstack/react-router'
import useSWR from 'swr'

export const Route = createFileRoute('/')({ component: Home })

const fetcher = (url: string) => fetch(url).then((res) => res.text())

function Home() {
  const { data, error, isLoading } = useSWR('/api/hello', fetcher)

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">SWR Hello World</h1>
      <p className="mt-4 text-lg">
        {isLoading && 'Loading...'}
        {error && 'Failed to load'}
        {data}
      </p>
    </div>
  )
}
