import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'


export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-red-100 py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg">
          <h2 className="font-display text-3xl tracking-tight text-slate sm:text-4xl">
            About
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate text-wrap">
          Nowadays, many practical decision tasks require to build models based on data which included serious difficulties, as imbalanced class distributions, a high number of classes, high-dimensional features, a small or extremely high number of learning examples, limited access to ground truth, data incompleteness, or data in motion, to enumerate only a few. Such characteristics may strongly deteriorate the final model performances. Therefore, the proposition of the new learning methods that can combat the aforementioned difficulties should focus on intense research. The main aim of this workshop is to discuss the problems of data difficulties, identify new issues, and shape future directions for research.
          </p>
          {/* <Button href="/register" color="white" className="mt-10">
            Get 6 months free
          </Button> */}
        </div>
      </Container>
    </section>
  )
}
