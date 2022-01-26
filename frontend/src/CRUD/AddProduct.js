import React, { useState } from 'react';

const AddProduct = () => {

  const [id, setId] = useState('');
  const [imgsrc, setImgsrc] = useState('');
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [prise, setPrise] = useState('');
  const [slug, setSlug] = useState('');

  function addproduct() {
    var product = {
      id: id,
      imgsrc: imgsrc,
      title: title,
      detail: detail,
      prise: prise,
      slug: slug
    }
    console.log(product)

  }
  return <div className='wrap_container'>
    <form>
      <input type="number" placeholder='id' onChange={(e) => { setId(e.target.value) }} />
      <input type="text" placeholder='imgsrc' onChange={(e) => { setImgsrc(e.target.value) }} />
      <input type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }} />
      <input type="text" placeholder='detail' onChange={(e) => { setDetail(e.target.value) }} />
      <input type="number" placeholder='price' onChange={(e) => { setPrise(e.target.value) }} />
      <input type="text" placeholder='slug' onChange={(e) => { setSlug(e.target.value) }} />

      <button onClick={addproduct} className="btn btn-success">Add Post</button>
    </form>
  </div>;
};

export default AddProduct;
