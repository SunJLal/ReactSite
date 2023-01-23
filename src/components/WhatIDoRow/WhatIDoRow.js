import React from "react";
export function WhatIDoRow() {
  return <div className="bg-secondary drop-shadow-xl">
    <div className="container items-center px-6 mx-auto">
      <section className="text-gray-800 text-center lg:text-left my-10">
        <div className="block rounded-lg">
          <div className="flex flex-wrap items-center text-white">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-6/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-4 text-white display-5">What I do</h2>
                <p className="text-white mb-12">
                  I lead the development of web projects and applications  for a FinTech company which has facilitated more than 400,000 loans worth more than $9 billion in revenue.
                </p>
                <div className="grid lg:gap-x-12 md:grid-cols-3">
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">1,500+</h2>
                    <h5 className="text-lg font-medium mb-0">commits</h5>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">300K+</h2>
                    <h5 className="text-lg font-medium mb-0">lines of code</h5>
                  </div>
                  <div className="">
                    <h2 className="text-3xl font-bold mb-4">800M+</h2>
                    <h5 className="text-lg font-medium mb-0">Impressions</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-6/12">
              <img src="/assets/images/mockups/ap-desktop.png" alt="AUTOPAY website example on a laptop" className="img-fluid hidden sm:inline" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>;
}
  