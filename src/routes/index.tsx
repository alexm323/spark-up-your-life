import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { Process } from '../components/Process'
import { Booking } from '../components/Booking'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
