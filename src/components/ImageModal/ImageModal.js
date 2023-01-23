import React from "react";
import './ImageModal.css'

export default function ImageModal(props) {
  return <>
  <img
    src={props.imagelink}
    className="tile max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl w-1/4 grayscale hover:grayscale-0"
    alt=""
    data-bs-toggle="modal" data-bs-target={'#'+props.iname}
  />
  <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id={props.iname} tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
    <div className="modal-dialog modal-dialog-centered relative w-auto max-w-full h-auto pointer-events-none lg:px-28 xs:px-10">
      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <img
          src={props.imagelink}
          className="max-w-auto max-h-screen h-auto transition-shadow ease-in-out duration-50 shadow-none hover:shadow-xl"
          alt=""
        />
      </div>
    </div>
  </div>
  </>;
}
