import React from "react";
import '@proyecto26/animatable-component';
import 'img-comparison-slider';
import './ProjectsRow.css';

export function ProjectsRow() {
    return <>
        <div className="py-24 px-6 mx-auto cubes">

            <section className="text-gray-800 dark:text-white text-center">

                <h2 className="text-3xl font-bold mb-4 pb-4 text-center">Projects</h2>

                <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
                    <div className="mb-6 lg:mb-0">
                        <div className="cursor-pointer pt-10 relative block  rounded-lg " data-bs-toggle="modal" data-bs-target="#lf_project">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat  relative overflow-hidden bg-no-repeat  rounded-lg mx-auto -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="/assets/images/mockups/rg-LF-ip12pro.png" className="w-1/2 mx-auto" alt="example of loan finder application" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{'backgroundColor': 'rgba(251, 251, 251, 0.15)'}}></div>

                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="font-bold text-lg mb-3">Loan Finder Application</h5>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="lf_project" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                        <div className="modal-dialog modal-dialog-centered relative w-auto max-w-full h-auto pointer-events-none lg:px-60 px-10 sm:px-10">
                            <div className="pb-10 modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-gray-900/90 dark:text-white bg-clip-padding rounded-md outline-none text-current">
                                <button type="button"
                                    className="ml-auto btn-close box-content w-4 h-4 p-1 pt-0 pr-10 pb-10 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                <h1 className="mb-10">Loan Finder</h1>
                                <div className="flex flex-wrap">
                                    <div className="block w-full lg:flex grow-0 shrink-0 basis-auto mx-auto">

                                        <img-comparison-slider hover="hover" tabIndex="0" class="rendered mx-auto" value="100">
                                            <img slot="first" src="/assets/images/mockups/rg-LF-ip12pro.png" className="max-h-[60vh]" alt="Loan Finder application splash page"/>
                                            <img slot="second" src="/assets/images/mockups/rg-LF-ip12pro2.png" className="max-h-[60vh]" alt="Loan Finder application on step 5" />
                                            <svg slot="handle" className="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                                                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" strokeWidth="1" fill="#000" vectorEffect="non-scaling-stroke"></path>
                                            </svg>
                                        </img-comparison-slider>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:mb-0">
                        <div className="cursor-pointer pt-10 relative block  rounded-lg " data-bs-toggle="modal" data-bs-target="#ft_project">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat relative overflow-hidden bg-no-repeat rounded-lg mx-auto -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="/assets/images/mockups/rg-FT-ip12pro2.png" className="w-1/2 mx-auto" alt="Fast Track application at 35%" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{'backgroundColor': 'rgba(251, 251, 251, 0.15)'}}></div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="font-bold text-lg mb-3">Auto Refinance Application</h5>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="ft_project" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                        <div className="modal-dialog modal-dialog-centered relative w-auto max-w-full h-auto pointer-events-none lg:px-60 px-10 sm:px-10">
                            <div className="pb-10 modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-gray-900/90 dark:text-white bg-clip-padding rounded-md outline-none text-current">
                                <button type="button"
                                    className="ml-auto btn-close box-content w-4 h-4 p-1 pt-0 pr-10 pb-10 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                <h1 className="mb-10">Fast Track</h1>
                                <div className="flex flex-wrap">
                                    <div className="block w-full lg:flex grow-0 shrink-0 basis-auto mx-auto">

                                        <img-comparison-slider hover="hover" tabIndex="0" class="rendered mx-auto" value="100">
                                            <img slot="first" src="/assets/images/mockups/rg-FT-ip12pro.png" className="max-h-[60vh]"  alt="Fast Track application at 15%" />
                                            <img slot="second" src="/assets/images/mockups/rg-FT-ip12pro2.png" className="max-h-[60vh]"  alt="Fast Track application at 35%" />
                                            <svg slot="handle" className="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                                                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" strokeWidth="1" fill="#000" vectorEffect="non-scaling-stroke"></path>
                                            </svg>
                                        </img-comparison-slider>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:mb-0">
                        <div className="cursor-pointer pt-10 relative block  rounded-lg " data-bs-toggle="modal" data-bs-target="#web_projects">
                            <div className="flex">
                                <div
                                    className="relative overflow-hidden bg-no-repeat  relative overflow-hidden bg-no-repeat  rounded-lg mx-auto -mt-4"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src="/assets/images/mockups/ap-web.png" className="w-1/2 mx-auto"  alt="AUTOPAY website homepage" />
                                    <div
                                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{'backgroundColor': 'rgba(251, 251, 251, 0.15)'}}>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="font-bold text-lg mb-3">Websites</h5>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="web_projects" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">

                        <div className="modal-dialog modal-dialog-centered relative w-auto max-w-full h-auto pointer-events-none lg:px-60 px-10 sm:px-10">
                            <div className="pb-10 modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-gray-900/90 dark:text-white bg-clip-padding rounded-md outline-none text-current">
                                <button type="button"
                                    className="ml-auto btn-close box-content w-4 h-4 p-1 pt-0 pr-10 pb-10 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                <h1 className="mb-10">Websites</h1>
                                <div className="flex flex-wrap">
                                    <div className="block w-full lg:flex grow-0 shrink-0 basis-auto mx-auto">

                                        <img-comparison-slider hover="hover" tabIndex="0" class="rendered mx-auto" value="100">
                                            <img slot="first" src="/assets/images/mockups/ap-web-ip12pro.png" className="max-h-[60vh]" alt="AUTOPAY website glossary" />
                                            <img slot="second" src="/assets/images/mockups/ap-web-ip12pro2.png" className="max-h-[60vh]" alt="AUTOPAY website FAQ" />
                                            <svg slot="handle" className="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                                                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" strokeWidth="1" fill="#000" vectorEffect="non-scaling-stroke"></path>
                                            </svg>
                                        </img-comparison-slider>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>


        </div>
    </>;
}
