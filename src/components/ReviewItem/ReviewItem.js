import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product;
    return (
        <div className='product'>
            <div className="product-item">
        <div className="product-description">
          <h4 className="product-name">name:{name}</h4>
          
          <p>Price: ${price} </p>
          <p>
            Quantity: ${quantity}
          </p>
          <button onClick={()=>props.handleRemove(key)} className="btn-regular">Remove</button>
          <br />
          
        </div>
      </div>
        </div>
    );
};

export default ReviewItem;