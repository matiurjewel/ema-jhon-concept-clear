import React from "react";
import { useHistory } from "react-router-dom";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearCart, removeFromDb } from "../utilities/fakedb";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);

    removeFromDb(key);
  };

  const handlePlaceOrder=()=>{
    history.push('/placeOrder')
    setCart([]);
    clearCart()
    
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem key={product.key} handleRemove={handleRemove} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
            <button onClick={handlePlaceOrder} className="btn-regular">Place Your Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
