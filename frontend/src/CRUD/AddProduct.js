import React from 'react';

const AddProduct = () => {
  return <div className='wrap_container'>
     <form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" />
   <input type="submit" value="Submit" />
</form>
  </div>;
};

export default AddProduct;
