import React from "react";

const ImagesList = ({ pictures = [] }) => {
  return (
    <div className="recipes-list">
      {pictures.map((picture) => {
        return (
          <div key={picture.id} className="recipe">
            <img
              loading="lazy"
              src={picture.image}
              className="recipe-img"
              alt={picture.name}
            ></img>
            <figcaption>
              <h5>{picture.name}</h5>
            </figcaption>
          </div>
        );
      })}
    </div>
  );
};

export default ImagesList;
