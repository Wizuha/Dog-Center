import React, { useEffect, useState } from "react";
import "./Gallery.css";
import GalleryPicture from "@/components/GalleryPicture/GalleryPicture";

function Gallery() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/20")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPictures(data.message);
      })
      .catch((error) => console.log("Error fetching images :", error));
  }, []);

  useEffect(() => {
    console.log(pictures);
  }, [pictures]);

  return (
    <div className="gallery-page">
      <GalleryPicture pictures = {pictures} />
    </div>
  );
}

export default Gallery;
