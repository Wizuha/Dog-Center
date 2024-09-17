import React from "react";
import './PictureCard.css'

function PictureCard({ picture }) {
  return (
    <div className="picture-content">
      <img src={picture} />
    </div>
  );
}

export default PictureCard;
