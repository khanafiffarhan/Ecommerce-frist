import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../components/Card";

const AllProducts = () => {
  const [AllProducts, setAllProduct] = useState([]);
  // const [idd, setId] = useState(0);
  const [imgsrc, setImgsrc] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [prise, setPrise] = useState("");
  const [slug, setSlug] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:5000/readproduct").then((res) => {
      setAllProduct(res.data);
    });
  }, []);



  const updtproduct = (id) => {
    var product = {
      // idd: idd,
      id: id,
      newimgsrc: imgsrc,
      newtitle: title,
      newdetail: detail,
      newprise: prise,
      newslug: slug,
    };
    Axios.put("http://localhost:5000/updtproduct", product);
    console.log(product)
  };
  const dltproduct = (id) => {
    Axios.delete(`http://localhost:5000/dltproduct/${id}`);
  };


  return (
    <div>
      <div className="Cards_container">
        {AllProducts.map((product) => (
          <>
            <div >
              <Card
                title={product.title}
                // id={product.idd}
                imgsrc={product.imgsrc}
                prise={product.prise}
                detail={product.detail}
                slug={product.slug}
              />
              <div>
                {/* <input
                  type="number"
                  placeholder="idd"
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                /> */}
                <input
                  type="text"
                  placeholder="imgsrc"
                  onChange={(e) => {
                    setImgsrc(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="detail"
                  onChange={(e) => {
                    setDetail(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="price"
                  onChange={(e) => {
                    setPrise(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="slug"
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                />

              </div>

              <button onClick={() => updtproduct(product._id)}>Update</button>
              <button onClick={() => dltproduct(product._id)}>
                Delete item
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
