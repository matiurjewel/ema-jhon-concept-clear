import React from "react";

import "./Product.css";
import lash from "../../images/lash.jpg";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const { name, img, seller, price, stock, star } = props.product;
  return (
    <div className="product">
      <div
        style={{
          backgroundImage: `url(${lash})`,
        }}
        className="img"
      >
        <img src={img} alt="product-img" />
      </div>
      <div className="product-item">
        <div className="product-description">
          <h4 className="product-name">name:{name}</h4>
          <p>
            <small>by:{seller}</small>
          </p>
          <p>Price: ${price} </p>
          <p>
            <small>only {stock} left in stock - order soon</small>
          </p>
          {/* <Rating
            initialRating={star}
            readonly
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
          /> */}
          <ReactStars
            count={star}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <br />
          <button onClick= {()=>props.handleAddToCart(props.product)} className="btn-regular">
            <FontAwesomeIcon className="icon-color" icon={faShoppingCart} />
            Add To Cart
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Product;
