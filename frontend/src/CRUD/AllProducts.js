import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../components/Card";

const AllProducts = () => {
  const [AllProducts, setAllProduct] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/readproduct").then((res) => {
      setAllProduct(res.data);
    });
  }, []);
  return (
    <div>
        <div className='Cards_container'>
      {AllProducts.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          id={product.id}
          imgsrc={product.imgsrc}
          prise={product.prise}
          detail={product.detail}
          slug={product.slug}
        />
      ))}
      </div>
    </div>
  );
};

export default AllProducts;
