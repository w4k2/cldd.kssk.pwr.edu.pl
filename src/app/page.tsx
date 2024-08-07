import { About } from '@/components/About'
import { Topics } from '@/components/Topics'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Organizers } from '@/components/Organizers'
import { KeyDates } from '@/components/KeyDates'
import { Submission } from '@/components/Submission'
import { Keynote } from '@/components/Keynote'
import { PC } from '@/components/PC'
import { Program } from '@/components/Program'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Keynote />
        <Topics />
        <KeyDates />
        <Submission />
        <Organizers />
        <PC />
      </main>
      <Footer />
    </>
  )
}
