import React from "react";
import img from "../../images/giphy.gif";
const PlaceOrder = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#5D8BF4",
        
        marginBottom: "10px",
        height: "100vh"
      }}
    >
      <h3 style={{
        marginBottom: "0px",
        color: "orange",
        padding: "15px",
        fontWeight: "400",
        fontSize: "40px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "italic"
      }}>place order is done!!</h3>
      <img src={img} alt="" />
    </div>
  );
};

export default PlaceOrder;
