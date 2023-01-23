import React from "react";
import './TestimonialRow.css'
import { TestimonialCarousel } from "../TestimonialCarousel/TestimonialCarousel";

export function TestimonialRow() {
  return <>

    <div className="cubes py-24 px-6 mx-auto">
      <section className="text-gray-800 dark:text-white text-center">
        <TestimonialCarousel carouselKey="body" />
      </section>
    </div>

  </>;
}
