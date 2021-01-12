import React from "react";
import "../scss/product_page.scss";

const ProductPage = (product) => {
  const { id, title, author, image, price, addToCart } = product;
  
  return (
    <div className="product_page" key={id}>
      <div className="img_card">
        <img src={image} alt={title} />
      </div>
      <div className="block_info">
        <div className="author">
          <h4>{author}</h4>
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="price">
          <p>{price} ₽</p>
        </div>
        <button className="to_cart" onClick={addToCart.bind(this, product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
