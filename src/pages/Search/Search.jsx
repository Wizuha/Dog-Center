import React, { useEffect, useState } from "react";
import "./Search.css";
import GalleryPicture from "@/components/GalleryPicture/GalleryPicture";

function Search() {
  const [breeds, setBreeds] = useState({});
  const [inputBreed, setInputBread] = useState("");
  const [pictures, setPictures] = useState([]);
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreeds(data.message))
      .catch((error) => ("Error fetchings breeds", error));
  }, []);

  const handleChange = (event) => {
    setInputBread(event.target.value.toLowerCase());
  };

  const handleOnClick = () => {
    setNotFound("");
    setPictures([]);

    if (breeds[inputBreed]) {
      fetch(`https://dog.ceo/api/breed/${inputBreed}/images`)
        .then((res) => res.json())
        .then((data) => setPictures(data.message))
        .catch((error) => ("Error fetching breeds", error));
    } else {
      setNotFound("Breed not found");
    }
    setInputBread("");
  };
  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Enter a breed"
          value={inputBreed}
          onChange={handleChange}
        />
        <button onClick={handleOnClick}>Search</button>
      </div>
      {notFound && <p className = "not-found">{notFound}</p>}
      <div className="search-picture">
        <GalleryPicture pictures={pictures} />
      </div>
    </div>
  );
}

export default Search;
