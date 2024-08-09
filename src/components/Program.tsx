import { CheckIcon, HandThumbUpIcon, BellIcon, AcademicCapIcon} from '@heroicons/react/20/solid'

const timeline1 = [
    {
      id: 1,
      time: '09:00–09:30',
      authors: 'CLD2 Organizing Committee',
      title: 'Opening and Keynote',
      icon: BellIcon,
    },
    {
        id: 2,
        time: '09:30–09:50',
        authors: 'Anurag Daram and Dhireesha Kudithipudi',
        title: 'Does Alignment help Continual Learning?',
        icon: AcademicCapIcon,
      },
      {
        id: 3,
        time: '09:50–10:10',
        authors: 'Lea Hergert and Mark Jelasity',
        title: 'Detecting Noisy Labels Using Early Stopped Models',
        icon: AcademicCapIcon,
      },
      {
        id: 4,
        time: '10:10–10:30',
        authors: 'Kosmas Pinitas, Nemanja Rasajki, Konstantinos Makantasis, and Georgios N. Yannakakis',
        title: 'Silhouette Distance Loss for Learning Few-Shot Contrastive Representations',
        icon: AcademicCapIcon,
      },
  ]

  const timeline2 = [
    {
      id: 1,
      time: '11:00–11:20',
      authors: 'Kisung Seo, Soonyong Gwon, and Woon Chae',
      title: 'Representation Learning of Global and Local Features Based on Keypoint Erasing and Masking for Challenging Data in Visible-Infrared Person Re-Identification',
      icon: AcademicCapIcon,
    },
    {
        id: 2,
        time: '11:20–11:40',
        authors: 'Paweł Trajdos and Marek Kurzynski',
        title: 'A dual ensemble classifier used to recognise contaminated multi-channel EMG and MMG signals in the control of upper limb bioprosthesis',
        icon: AcademicCapIcon,
      },
      {
        id: 3,
        time: '11:40–12:00',
        authors: 'Szymon Wojciechowski and Michał Woźniak',
        title: 'Fᵦ-plot - a visual tool for evaluating imbalanced data classifiers',
        icon: AcademicCapIcon,
      },
      {
        id: 4,
        time: '12:00–12:20',
        authors: 'Mateusz Wojtulewicz, Piotr Duda, Robert Nowicki, and Leszek Rutkowski',
        title: 'On Speeding Up the Training of Deep Neural Networks Using the Streaming Approach: The Base-Values Mechanism',
        icon: AcademicCapIcon,
      },
      {
        id: 5,
        time: '12:20–12:30',
        authors: 'CLD2 Organizing Committee',
        title: 'Conclusion of the workshop',
        icon: BellIcon,
      },
  ]

export function Program() {
  return (
    <section id='program' className='bg-red-100 py-4'>
              <div className="bg-white py-24 sm:py-32 rounded-4xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Workshop program</h2>
            <p className="mt-4 text-lg tracking-tight text-slate text-wrap">
        CLD2, as a half-day event, will consist of two 90-minute sessions, lasting from 9:00 to 10:30 am and from 11:00 to 12:30 pm separated by a 30-minute coffee break. 
          </p>
    <div className="flow-root mt-12">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Session 1 (9:00–10:30)</h3>
      <ul role="list" className="">
        {timeline1.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline1.length - 1 ? (
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
                      {event.time}{' '}
                      <a className="font-medium text-gray-900">
                        {event.authors}{'; '}
                      </a>
                      <a className="italic font-bold text-gray-900">
                        {event.title}
                      </a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Coffee break (10:30–11:00)</h3> */}

      <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Session 2 (11:00–12:30)</h3>

      <ul role="list" className="">
        {timeline2.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline1.length - 1 ? (
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
                      {event.time}{' '}
                      <a className="font-medium text-gray-900">
                        {event.authors}{'; '}
                      </a>
                      <a className="italic font-bold text-gray-900">
                        {event.title}
                      </a>
                    </p>
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
