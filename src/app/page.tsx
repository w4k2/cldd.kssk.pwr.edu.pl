import { CallToAction } from '@/components/CallToAction'
import { About } from '@/components/About'
import { Topics } from '@/components/Topics'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Organizers } from '@/components/Organizers'
import { KeyDates } from '@/components/KeyDates'
import { Submission } from '@/components/Submission'
// import { Register } from '@/components/Register'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures />
        <SecondaryFeatures /> */}
        <About />
        <Topics />
        <KeyDates />
        <Submission />
        <Organizers />
        {/* <Register /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
