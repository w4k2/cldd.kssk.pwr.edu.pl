import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

const people = [
    {
      "person": "Pedro H. Abreu",
      "university": "University of Coimbra",
      "country": "Portugal"
    },
    {
      "person": "Alberto Cano",
      "university": "Virginia Commonwealth University",
      "country": "USA"
    },
    {
      "person": "Sung-Bae Cho",
      "university": "Yonsei University",
      "country": "South Korea"
    },
    {
      "person": "Jose Alfredo F. Costa",
      "university": "Federal University (UFRN)",
      "country": "Brazil"
    },
    {
      "person": "Richard J. Duro",
      "university": "Universidade da Coruña",
      "country": "Spain"
    },
    {
      "person": "Jean-Charles Lamirel",
      "university": "University of Strasbourg",
      "country": "France"
    },
    {
      "person": "Mohamed Medhat Gaber",
      "university": "Birmingham City University",
      "country": "UK"
    },
    {
      "person": "João Gama",
      "university": "University of Porto",
      "country": "Portugal"
    },
    {
      "person": "Salvador Garcia",
      "university": "University of Granada",
      "country": "Spain"
    },
    {
      "person": "Manuel Grana",
      "university": "University of the Basque Country",
      "country": "Spain"
    },
    {
      "person": "Francisco Herrera",
      "university": "University of Granada",
      "country": "Spain"
    },
    {
      "person": "Alvaro Herrero",
      "university": "University of Burgos",
      "country": "Spain"
    },
    {
      "person": "Bartosz Krawczyk",
      "university": "Rochester Institute of Technology",
      "country": "USA"
    },
    {
      "person": "Shin-Jye Lee",
      "university": "National Chiao Tung University",
      "country": "Taiwan"
    },
    {
      "person": "Leandro L.Minku",
      "university": "University of Birmingham",
      "country": "UK"
    },
    {
      "person": "Bernhard Pfahringer",
      "university": "University of Waikato",
      "country": "New Zealand"
    },
    {
      "person": "Piotr Porwik",
      "university": "Silesian University",
      "country": "Poland"
    },
    {
      "person": "José Luis Calvo Rolle",
      "university": "University of A Coruña",
      "country": ""
    },
    {
      "person": "Héctor Quintián",
      "university": "University of A Coruña",
      "country": "Spain"
    },
    {
      "person": "Jerzy Stefanowski",
      "university": "Poznań University of Technology",
      "country": "Poland"
    },
    {
      "person": "Dragan Simic",
      "university": "University of Novi Sad",
      "country": "Serbia"
    },
    {
      "person": "Arkadiusz Tomczyk",
      "university": "Łódź University of Technology",
      "country": "Poland"
    }
  ]

export function PC() {
    return (
        <section
          id="topics"
          className="relative overflow-hidden bg-red-100 py-4"
        >
      <div className="bg-white py-24 sm:py-32 rounded-4xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Program commitee</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            The submission will be reviewed by an international group of experts in the field of artificial intelligence.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {people.map((person) => (
              <article key={person.name} className="flex max-w-xl flex-col items-start justify-between">
                {/* <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div> */}
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a>
                      <span className="absolute inset-0" />
                      {person.person} 
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"> {person.university} {person.country} </p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </div>
      </section>
    )
  }