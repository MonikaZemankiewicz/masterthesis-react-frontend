import React, { useState, useEffect } from "react";
import ImagesList from "./ImagesList";

const AllImages = () => {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/images/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPictures(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="recipes-container">
      {<ImagesList pictures={pictures}></ImagesList>}
    </section>
  );
};

export default AllImages;
