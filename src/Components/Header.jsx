import React from "react";
import { Link } from "react-router-dom";
import "../scss/header.scss";

const Header = ({ count, summary }) => (
  <div className="header">
    <div className="shop">
      <Link to="/">
        <h3>BookShop</h3>
      </Link>
    </div>
    <div className="cart_and_total">
      <Link to="/cart">
        <div className="cart">
          <h4>
            Cart: <b>{count}</b>
          </h4>
        </div>
        <div className="total">
          <h4>
            Total: <b>{summary}</b> ₽
          </h4>
        </div>
      </Link>
    </div>
  </div>
);

export default Header;
