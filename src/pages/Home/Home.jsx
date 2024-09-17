import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const[banner,setBanner] = useState();
  
  useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data)=> {
        console.log(data);
        setBanner(data)
      })
  },[]) 

  return (
    <div className="home-content">
      <div>
        <h1>
          <span>Find your perfect dog breed :</span>
          <br />
          Find your dog breed in one click
        </h1>
        <p>Your guide to dog breeds, their characteristics and needs.</p>
      </div>
      <div className="get-started">
        <a href= "./Gallery">Get Stated</a>
      </div>
      <div className="banner">
        {banner ? <img src={banner.message} /> : <p>Aucune image</p> }
      </div>
    </div>
  );
}

export default Home;
