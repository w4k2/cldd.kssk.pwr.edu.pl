export function Keynote() {
    return (
      <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
          <div className="absolute left-1/2 top-0 -z-10" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw]" />
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keynote talk</h2>

            <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            
              
              <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  Multimodal data classification in the context of difficult data processing
                </p>
              </blockquote>

              <p className="mt-2 mb-2 text-lg leading-8 text-gray-600">
                Abstract of Keynote talk.
            </p>
            </div>
            <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
              <img
                alt=""
                src="https://www.kssk.pwr.edu.pl/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc29DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--de77d87aaf21dbd9285e1149f153b2b28828f7fb/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWdBQ2FRSUFBZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--6bfba435ab0a07076737973324901e1a2a6bce87/IMG_0619-2a-kopia.jpg"
                className="rounded-xl bg-indigo-50 lg:rounded-3xl"
              />
            </div>
            <figcaption className="text-base lg:col-start-1 lg:row-start-3">
              <div className="font-semibold text-gray-900">Paweł Zyblewski</div>
              <div className="mt-1 text-gray-500">Wrocław University of Science and Technology</div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  