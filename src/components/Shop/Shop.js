
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Product from "../Product/Product";
import { addToDb } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products)

  
  const handleAddToCart = (product) => {
    const exist = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search Product" />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <NavLink  to="/review">
            <button className="btn-regular">Review Your Order</button>
            </NavLink>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
