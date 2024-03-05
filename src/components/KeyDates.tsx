import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Paper',
    target: 'submission deadline',
    href: '#',
    date: '15 May 2024',
    datetime: '2024-05-15',
    icon: CheckIcon,
  },
  {
    id: 2,
    content: 'Author',
    target: 'notification date',
    href: '#',
    date: '1 July 2024',
    datetime: '2024-07-01',
    icon: CheckIcon,
  },
  {
    id: 3,
    content: 'Publication of final workshop schedule',
    target: '',
    href: '#',
    date: '8 August 2024',
    datetime: '2024-08-08',
    icon: CheckIcon,
  },
  {
    id: 4,
    content: 'Early registration deadline',
    target: '',
    href: '#',
    date: '15 August 2024',
    datetime: '2024-08-15',
    icon: CheckIcon,
  },
  {
    id: 5,
    content: 'Workshop',
    target: '',
    href: '#',
    date: 'TBA',
    datetime: '1970-01-01',
    icon: CheckIcon,
  },
]

export function KeyDates() {
  return (
    <section id='keyDates' className='bg-red-100 py-4'>
              <div className="bg-white py-24 sm:py-32 rounded-4xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key dates</h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p> */}

    <div className="flow-root mt-12">
      <ul role="list" className="-mb-8">
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
          </div>
          </div>

    </section>
  )
}
