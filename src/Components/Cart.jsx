import React from "react";
import { Link } from "react-router-dom";
import "../scss/cart.scss";


const CartComponent = ({ items, total }) =>
  total === 0 ? (
    <div className="empty_cart">
      <p>
        There are no products in your cart yet. You can choose some in our{" "}
        <Link to="/">catalogue</Link>.
      </p>
    </div>
  ) : (
    <div className="full_cart">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <div className="img_card_cart">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="item_info">
            <div className="cart_author">
              <h4>{item.author}</h4>
            </div>
            <div className="cart_title">
              <h2>{item.title}</h2>
            </div>
            <div className="cart_price">
              <p>{item.price} ₽</p>
            </div>
          </div>
          <div className="cart_quantity">
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="quantity_buttons">
            <button
              className="add"
              onClick={item.addItemQuantity.bind(this, item)}
            >
              {" "}
              +{" "}
            </button>
            <button
              className="del"
              onClick={item.delItemQuantity.bind(this, item)}
            >
              {" "}
              -{" "}
            </button>
          </div>
          <button
            className="remove"
            onClick={item.removeFromCart.bind(this, item)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="summary">Total: {total} ₽</div>
      <div className="to_order">
        <Link to="/order">Checkout</Link>
      </div>
    </div>
  );

export default CartComponent;
