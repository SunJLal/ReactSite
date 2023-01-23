import React from "react";
import './LogoRow.css'

export function LogoRow() {
  return <>
<div className="py-24 px-6 mx-auto">
    <section className="text-gray-800 dark:text-white text-center">
      <h2 className="text-3xl font-bold mb-12">
        A few companies I have contributed code to
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-6 px-6 pt-12">
        <div className="mb-12 lg:mb-0 mx-auto item">
          <a
            href="https://www.nike.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/logos/ni.svg"
              className="img-fluid opacity-100 hover:opacity-40 transition duration-300 ease-in-out bg-blue mt-2 mb-3 logo dark:invert min-h-[70px]"
              style={{'width': '125px', 'height': '44px'}}
              alt="Nike"
              tooltip="Nike"
            />
            <p className="pt-14 text-2xl text-black dark:text-white mb-10">Nike</p>
          </a>
        </div>

        <div className="mb-12 lg:mb-0 mx-auto">
          <a
            href="https://www.thesavingsgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/logos/tsg.svg"
              className="img-fluid opacity-100 hover:opacity-40 transition duration-300 ease-in-out bg-blue logo mx-auto mb-5"
              style={{'maxHeight': '90px'}}
              alt="The Savings Group"
              tooltip="The Savings Group"
            />
            <p className="pt-9 text-2xl text-black dark:text-white mb-10">
              The Savings Group
            </p>
          </a>
        </div>

        <div className="mb-12 lg:mb-0 mx-auto">
          <a
            href="https://www.rategenius.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/logos/rg.svg"
              className="img-fluid opacity-100 hover:opacity-40 transition duration-300 ease-in-out bg-blue logo mx-auto"
              height="90px"
              style={{'maxHeight': '90px'}}
              alt="RateGenius"
              tooltip="RateGenius"
            />
            <p className="pt-14 text-2xl text-black dark:text-white mb-10">
              RateGenius
            </p>
          </a>
        </div>

        <div className="mb-12 lg:mb-0 mx-auto">
          <a
            href="https://mytresl.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/logos/t.svg"
              className="img-fluid opacity-100 hover:opacity-40 transition duration-300 ease-in-out bg-blue logo"
              height="90px"
              style={{'maxHeight': '90px'}}
              alt="Tresl"
              tooltip="Tresl"
            />
            <p className="pt-14 text-2xl text-black dark:text-white mb-10">Tresl</p>
          </a>
        </div>

        <div className="mb-12 lg:mb-0 mx-auto">
          <a
            href="https://www.autopay.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/logos/ap.svg"
              className="img-fluid opacity-100 hover:opacity-40 transition duration-300 ease-in-out bg-blue logo mx-auto"
              height="90px"
              style={{'maxHeight': '90px'}}
              alt="AUTOPAY"
              tooltip="AUTOPAY"
            />
            <p className="pt-14 text-2xl text-black dark:text-white mb-10">
              AUTOPAY
            </p>
          </a>
        </div>

        <div className="mb-12 lg:mb-0 mx-auto">
          <a
            href="https://www.volusion.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/logos/vol.svg"
              className="img-fluid opacity-100 hover:opacity-40 transition duration-300 ease-in-out bg-blue logo mx-auto"
              height="90px"
              style={{'maxHeight': '90px'}}
              alt="Volusion"
              tooltip="Volusion"
            />
            <p className="pt-14 text-2xl text-black dark:text-white mb-10">
              Volusion
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>

  </>;
}
