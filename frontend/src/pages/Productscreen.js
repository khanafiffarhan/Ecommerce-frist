import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
const Productscreen = (props) => {
  const { slug } = useParams();

  // if(!product){
  //     return <div> <p> Product not found</p></div>
  // }
  return (
    <div>
      
      {data.products
        .filter((x) => x.slug === slug)
        .map((item)=>(
          <div className='detail_container'>
          <div className='card_detail'>
          <div className='.dtail_img'>
              <img src={item.imgsrc} alt="Product_details" />
          </div>
          <div className="dtail_info">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <p>{item.prise}</p>
              <button className='dtl_btn' key={item.id} onClick={()=> props.addToCart(item.id)}> Add to Cart </button>
          </div>
          </div>
          </div>
      ))}

    </div>
  );
};


export default Productscreen;
