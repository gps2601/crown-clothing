import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl}/>
    <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        {quantity} x £{price}
    </div>
  </div>
);

export default CartItem
