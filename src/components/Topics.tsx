import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

const posts = [
    {
      id: 1,
      title: 'Learning from imbalanced data',
      description:
        'You try to build a model, but it is biased towards the class that is better represented in the dataset.',
    },
    {
      id: 2,
      title: 'Learning from imbalanced data streams, including concept drift management',
      description:
        'The situation turns out to be even more difficult than in the previous case, because the data arrives (potentially) forever.',
    },
    {
      id: 3,
      title: 'Learning from multi-view/multimodal data',
      description:
        'You solve the problem of the curse of dimensionality through space decomposition and ensemble methods.',
    },
    {
      id: 4,
      title: 'Automated machine learning',
      description:
        'As in meta-learning, you try to give the method full control over the learning process.',
    },
    {
      id: 5,
      title: 'Life-long machine learning',
      description:
        "You already have a working model, but it turns out that it should solve a new task. And you really don't want to train it from the ground up.",
    },
    {
      id: 6,
      title: 'Learning with limited ground truth access',
      description:
        'You have experts to label the data, but there are a million objects and only three experts.',
    },
    {
      id: 7,
      title: 'Learning in a open set',
      description:
        "You're training your model to tell dogs from cats, but you also want to know what happens when you show it a raccoon.",
    },
    {
      id: 8,
      title: 'Learning from high dimensional data',
      description:
        "In the general case, you have a very large number of features in the set, but you don't want to solve this problem with multi-view approaches.",
    },
    {
      id: 9,
      title: 'Learning with a high number of classes',
      description:
        'Sometimes there are more classes than objects in a set.',
    },
    {
      id: 10,
      title: 'Learning from massive data, including instance and prototype selection',
      description:
        'You are trying to manage the problem of a very large dataset by initially sorting it out and finding the most valuable instances.',
    },
    {
      id: 11,
      title: 'Learning based on limited data sets, including one-shot learning',
      description:
        'It turns out that your data set is not massive. On the contrary, it covers only a few cases. What are you doing?',
    },
    {
      id: 12,
      title: 'Learning from incomplete data',
      description:
        'Or maybe the data set is not too small, but it turns out to be extremely leaky?',
    },
    {
      id: 13,
      title: 'Case studies and real-world applications',
      description:
        'Share your struggles with the real datasets!',
    },
]

export function Topics() {
    return (
        <section
          id="topics"
          className="relative overflow-hidden bg-red-100 py-4"
        >
      <div className="bg-white py-24 sm:py-32 rounded-4xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Topics of interest</h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p> */}
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
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
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
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