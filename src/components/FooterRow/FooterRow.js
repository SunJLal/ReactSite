import React from "react";
import './FooterRow.css'

export function FooterRow() {
  return <>
  <div className="bg-secondary">
    <div className="text-center">
      <p>Sunjay Lal 🌎 {new Date().getFullYear()}</p>
    </div>
  </div>
  </>;
}
