import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <h1>Spark Up Your Life</h1>
    </main>
  )
}
