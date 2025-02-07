import React from "react";
import "./Card.css";

const Card = ({ img, title }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
