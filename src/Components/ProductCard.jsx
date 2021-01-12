import React from "react";
import { Link } from "react-router-dom";
import "../scss/product.scss";

const ProductCard = (product) => {
  const { id, title, author, image, price, addToCart } = product;
  
  return (
    <div className="product_card">
      <div className="title">
        <Link to={`/product/${id}`}>
          <h2>{title}</h2>
        </Link>
      </div>
      <div className="author">
        <h4>{author}</h4>
      </div>
      <div className="img_card">
        <img src={image} alt="product" />
      </div>
      <div className="price">
        <p>{price} ₽</p>
      </div>
      <button className="to_cart" onClick={addToCart.bind(this, product)}>
        To cart
      </button>
    </div>
  );
};

export default ProductCard;
