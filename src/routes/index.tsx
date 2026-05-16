import { Component, type ReactNode, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import useSWR from 'swr'

export const Route = createFileRoute('/')({ component: Home })

const fetcher = (url: string) => fetch(url).then((res) => res.text())

function HelloBody() {
  const { data } = useSWR('/api/hello', fetcher, { suspense: true })
  return <>{data}</>
}

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return 'Failed to load'
    }
    return this.props.children
  }
}

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">SWR Hello World</h1>
      <p className="mt-4 text-lg">
        <ErrorBoundary>
          <Suspense fallback="Loading...">
            <HelloBody />
          </Suspense>
        </ErrorBoundary>
      </p>
    </div>
  )
}
