import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'


export function About() {
  return (
    <div>
    <section
      id="about"
      className="relative overflow-hidden bg-red-100 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg">
          <h2 className="font-display text-3xl tracking-tight text-slate sm:text-4xl">
            About
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate text-wrap mb-4">
          Nowadays, many practical decision tasks require to build models based on data which included serious difficulties, as imbalanced class distributions, a high number of classes, high-dimensional features, a small or extremely high number of learning examples, limited access to ground truth, data incompleteness, or data in motion, to enumerate only a few. Such characteristics may strongly deteriorate the final model performances. Therefore, the proposition of the new learning methods that can combat the aforementioned difficulties should focus on intense research. The main aim of this workshop is to discuss the problems of data difficulties, identify new issues, and shape future directions for research.
          </p>
        </div>
      </Container>
    </section>
    </div>
  )
}
