import React from "react";
import './TestimonialCarousel.css'

export function TestimonialCarousel(props) {
  return <>

    <section className="text-center">
      <div id={props.carouselKey} className="carousel slide relative carousel-dark" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner relative w-full overflow-hidden px-12">
          <div className="carousel-item active relative float-left w-full md:px-12 sm:px-12 xs:px-12">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                <p className="text-lg my-2 mx-4">
                  "Sunjay continues to be a subject matter expert and a creative problem solver. He is always thinking outside of the box. He has the grit to hammer an issue and see it through to the end. I love this about him."
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                <p className="text-lg my-2 mx-4">
                  "It's rare that you find someone so well rounded and tuned for either hard dev problems or, with a minor switch in gears, able to stand shoulder-to-shoulder with execs and management to discuss business problems."
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                <p className="text-lg my-2 mx-4">
                  "Sunjay shines especially on the creative side. If it means thinking outside the box, he is always thinking through problems and solutions. Especially with UI/UX, he is clear and communicative about good UX and bad UX. I value his input tremendously when it comes to customer experience."
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                <p className="text-lg my-2 mx-4">
                  "Sunjay is a masterful communicator. He is always in touch with me and his teammates to make sure that we’re all pulling in the same direction."
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                <p className="text-lg my-2 mx-4">
                  "Sunjay brings an interesting blend of qualities to the table. The sheer breadth of marketing knowledge he has in addition to just the raw technical skills is impressive and seems to ensure that we are ticking all the boxes."
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <div className="flex flex-wrap justify-center">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
                <p className="text-lg my-2 mx-4">
                  "He continues to impress me with an overall knowledge of our business, the industry, and how quickly and thoroughly he addresses stakeholder needs. He's responsive and communicative. He was a terrific resource to our stakeholders and teammates"
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button" data-bs-target={'#' + props.carouselKey} data-bs-slide="prev">
          <span className="carousel-control-prev-icon inline-block bg-no-repeat dark:filter-none" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button" data-bs-target={'#' + props.carouselKey} data-bs-slide="next">
          <span className="carousel-control-next-icon inline-block bg-no-repeat dark:filter-none" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </>;
}
