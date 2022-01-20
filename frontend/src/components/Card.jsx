import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.imgsrc} alt="Product" />
        </div>
        <div className="info">
          <h3>{props.title}</h3>
          <p>{props.detail}</p>
          <h3>{props.prise}</h3>
        </div>
        <div className="foot">
        <Link to={`/product/${props.slug}`}>
        <button>VIEW PRODUCTS</button>
      </Link>
        </div>
      </div>


     

     
    </>
  );
};

export default Card;
