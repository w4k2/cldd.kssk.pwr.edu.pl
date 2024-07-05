import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Paper',
    target: 'submission deadline',
    href: '#',
    date: '31 May 2024',
    datetime: '2024-05-15',
    icon: CheckIcon,
  },
  {
    id: 2,
    content: 'Requests for consideration of ',
    target: 'papers rejected from the main conference',
    href: '#',
    date: '11 July 2024',
    datetime: '2024-07-11',
    icon: CheckIcon,
  },
  {
    id: 3,
    content: 'Author notification date for ',
    target: 'standard papers & papers transfered from the main conference',
    href: '#',
    date: '18 July 2024',
    datetime: '2024-07-18',
    icon: CheckIcon,
  },
  {
    id: 4,
    content: 'Publication of final workshop schedule',
    target: '',
    href: '#',
    date: '8 August 2024',
    datetime: '2024-08-08',
    icon: CheckIcon,
  },
  {
    id: 5,
    content: 'Early registration deadline',
    target: '',
    href: '#',
    date: '15 August 2024',
    datetime: '2024-08-15',
    icon: CheckIcon,
  },
  {
    id: 6,
    content: 'Workshop',
    target: '',
    href: '#',
    date: '19 October 2024',
    datetime: '1970-01-01',
    icon: CheckIcon,
  },
]

export function KeyDates() {
  return (
    <section id='keyDates' className='bg-red-100 py-4'>
              <div className="bg-white py-24 sm:py-32 rounded-4xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key dates</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            In addition to regular paper submissions, the CLD2 Workshop may accept papers rejected from the main conference purely based on the previously written reviews (made available by the PC chairs). We invite potential authors to submit a request for their rejected paper to be considered by 11 July 2024. The decision on these papers will be made by 18 July 2024. Articles rejected from the main conference should be submitted using the submission system, choosing the appropriate submission type. Once submissions are received, CLD2 workshop organizers will ask ECAI24 PC Chairs for the main conference reviews.
            </p>

    <div className="flow-root mt-12">
      <ul role="list" className="">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className='bg-green-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>

    <p className="mt-4 text-lg leading-8 text-gray-600">
    All deadlines are at the end of the day specified, anywhere on Earth (UTC-12).
            </p>
          </div>
          </div>

    </section>
  )
}
