import React from "react";
import './MainNavigation.css'

export function MainNavigation() {
  return <nav
    className="navbar navbar-expand-lg shadow-lg text-lg py-2 relative flex items-center w-full justify-between"
  >
    <div className="px-6 w-full flex flex-wrap items-center justify-between">
      <div className="flex items-center w-full lg:w-auto">
        <a
          className="nav-link block text-xl font-bold pr-2 lg:px-2 py-2 text-white hover:text-blue-500 focus:text-blue-500 transition duration-150 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >Sunjay Lal</a
        >
        <button
          className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-white hover:text-blue-500 focus:text-blue-500 transition-shadow duration-150 ease-in-out ml-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="navbar-collapse collapse grow items-center text-center text-white"
        id="navbarSupportedContentY"
      >
        <div className="mobile-nav-text">

        </div>
        <ul className="navbar-nav ml-auto lg:flex lg:flex-row inline-flex">
          <li className="nav-item mx-4 lg:mx-0">
            <a
              className="nav-link items-center block text-center pr-2 lg:px-2 py-2 text-white hover:text-black focus:text-gray-700 transition duration-150 ease-in-out"
              href="https://github.com/sunjlal"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 16 16"
                width="1.4em"
                height="1.4em"
                focusable="false"
                role="img"
                aria-label="github"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi-github b-icon bi mx-auto"
                data-v-13334180=""
              >
                <g data-v-13334180="">
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li className="nav-item mb-2 lg:mb-0 mx-4 lg:mx-0">
            <a
              className="nav-link items-center block text-center pr-2 lg:px-2 py-2 text-white hover:text-blue-500 focus:text-gray-700 transition duration-150 ease-in-out"
              href="https://www.linkedin.com/in/sunjaylal"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 16 16"
                width="1.45em"
                height="1.45em"
                focusable="false"
                role="img"
                aria-label="linkedin"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi-linkedin b-icon bi mx-auto"
                data-v-13334180=""
              >
                <g data-v-13334180="">
                  <path
                    fillRule="evenodd"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}
