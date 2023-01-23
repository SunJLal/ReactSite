import React from "react";
import './PhotographyRow.css'
import ImageModal from "../ImageModal/ImageModal.js";

export function PhotographyRow() {
  return <>
  <div className="bg-secondary">
    <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Photography</h2>
    <div className="gallery flex flex-wrap justify-center shadow-lg filmstrip">
      <ImageModal imagelink="./assets/images/buddy.jpg" iname="buddy" />
      <ImageModal imagelink="./assets/images/turtle.jpg" iname="turtle" />
      <ImageModal imagelink="./assets/images/sl-wls.jpg" iname="owls" />
      <ImageModal imagelink="./assets/images/beach.png" iname="beach" />
    </div>
  </div>
  </>;
}
