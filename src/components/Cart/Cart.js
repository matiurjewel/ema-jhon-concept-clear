import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
      if(!product.quantity){
          product.quantity = 1;
      }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) *0.1;
  const grandTotal = total + tax + shipping;
  return (
    <div>
      <div className="cart-element">
        <h3>Ordered Summary</h3>
        <h4>Items Ordered: {totalQuantity}</h4>
        <br />
        <br />
        <p>Total :{total.toFixed(2)}</p>
        <p>Shipping : {shipping.toFixed(2)}</p>
        <p>Tax :{tax.toFixed(2)}</p>
        <p>Grand Total :{grandTotal.toFixed(2)}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
