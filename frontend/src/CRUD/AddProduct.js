import React, { useState } from 'react';
import Axios from 'axios';

const AddProduct = () => {

  const [id, setId] = useState('');
  const [imgsrc, setImgsrc] = useState('');
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [prise, setPrise] = useState('');
  const [slug, setSlug] = useState('');

  const addproduct = ()=> {
    var product = {
      id: id,
      imgsrc: imgsrc,
      title: title,
      detail: detail,
      prise: prise,
      slug: slug
    }
    Axios.post("http://localhost:5000/addproduct", product)
    console.log(product)

  }
  
  return <div className='wrap_container'>
    <div>
      <input type="number" placeholder='id' onChange={(e) => { setId(e.target.value) }} />
      <input type="text" placeholder='imgsrc' onChange={(e) => { setImgsrc(e.target.value) }} />
      <input type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }} />
      <input type="text" placeholder='detail' onChange={(e) => { setDetail(e.target.value) }} />
      <input type="number" placeholder='price' onChange={(e) => { setPrise(e.target.value) }} />
      <input type="text" placeholder='slug' onChange={(e) => { setSlug(e.target.value) }} />

      <button onClick={addproduct} className="hello">Add Post</button>
    </div>
  </div>;
};

export default AddProduct;
