import React from 'react'

const CartPage = (props) => {
    return (
        <div>
            {props.carts.map((item)=>(
          <div className='detail_container'>
          <div className='card_detail'>
          <div className='.dtail_img'>
              <img src={item.imgsrc} alt="Product_details" />
          </div>
          <div className="dtail_info">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <p>{item.prise}</p>
              <button className='dtl_btn' key={item.id} onClick={()=> props.dltCartItem(item)}> Delete from Cart </button>
          </div>
          </div>
          </div>
      ))}
        </div>
    )
}

export default CartPage
