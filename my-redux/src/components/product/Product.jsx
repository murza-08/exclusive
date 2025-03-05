import React from "react";
import "./Product.css";

function Product({ data }) {
  //useDispatch
  return (
    <div className="product">
      <div className="product-card">
        <div className="pro-img">
          <img  src={data.imageUrl} /> 
        </div>
        <button className="pro-btn">Add to Cart</button>
        <div className="pro-title">
          <h6>{ data.title }</h6>
        </div>
        <div className="pro-text">
          <p>${ data.price }</p>
          <h4> { data.viewsCount} </h4>
        </div>
      </div>
    </div>
  );
}

export default Product;