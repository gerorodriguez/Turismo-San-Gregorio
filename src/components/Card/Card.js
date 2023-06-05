import React from "react";
import "./Card.css";

const Card = ({ image }) => {
  return (
    <div class="container">
      <div class="card" >
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
