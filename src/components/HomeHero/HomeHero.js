import React from "react";
import './HomeHero.css'

export function HomeHero() {
  return <>

    <div
      className="relative overflow-hidden bg-no-repeat bg-cover drop-shadow-xl"
    >
      <div className="pt-[10rem] text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          <animatable-component autoplay duration="800" animation="fadeInDown">
            <p className="text-white">
              Senior Software Engineer<br />
              Front-End Architect<br />
              UX Designer
            </p>
          </animatable-component>
        </h1>
      </div>
    </div>

    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="text-center text-gray-800">
        <div
          className="block rounded-lg shadow-lg py-12 md:py-2 bg-white/25 dark:bg-gray-400/25 dark:text-white"
          style={{ 'marginTop': '-80px', 'backdropFilter': 'blur(30px)' }}
        >
          <section className="text-center py-8">
            <div
              id="hero-carousel"
              className="carousel slide relative carousel-dark"
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <div className="carousel-inner relative w-full overflow-hidden px-12">
                <div
                  className="carousel-item active relative float-left w-full md:px-12 sm:px-12 xs:px-12"
                >
                  <div className="flex flex-wrap justify-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                      <p className="text-lg my-2 mx-4">
                        "Sunjay's involvement with our team and projects is second
                        to none. He's pretty much the first person I ask for
                        anything."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <div className="flex flex-wrap justify-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                      <p className="text-lg my-2 mx-4">
                        "I continue to be impressed with his diligence and
                        attention to detail, as well as an ability to find lasting
                        solutions to hard problems."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <div className="flex flex-wrap justify-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                      <p className="text-lg my-2 mx-4">
                        "Sunjay delivers work on schedule, and often, ahead of
                        schedule. He takes ownership of what he does and what he's
                        touched in the codebase and always seems to have answers
                        for any questions we have."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <div className="flex flex-wrap justify-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                      <p className="text-lg my-2 mx-4">
                        "Sunjay exceeds expectations in all areas of innovation.
                        He never comes up empty-handed with a way to fix or design
                        something."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <div className="flex flex-wrap justify-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                      <p className="text-lg my-2 mx-4">
                        "Sunjay's accurate with time estimates and projections; in
                        fact he is often early on his targets. I feel like he
                        routinely leaves us a better position than we plan for."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#hero-carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat dark:filter-none"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#hero-carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat dark:filter-none"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>

  </>;
}
