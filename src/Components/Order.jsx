import React, { Component } from "react";
import {
  setName,
  setPhone,
  setEmail,
  setAddress,
  setDate,
  setTime,
} from "../Actions/Order";

import "../scss/order.scss";

class Order extends React.Component {
  confirmOrder = (e) => {
    e.preventDefault();
  };

  render() {
    const { items, total } = this.props;
    const {
      customerName,
      customerPhone,
      customerEmail,
      deliveryAddress,
      deliveryDate,
      deliveryTime,
    } = this.props;
    
    return (
      <div className="order">
        <ul className="order_list">
          {items.map((item) => (
            <li className="order_item" key={item.id}>
              <div className="order_img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="order_title">
                <h2>{item.title} </h2>
              </div>
              <div className="order_quantity">
                <h2>Quantity: {item.quantity}</h2>
              </div>
            </li>
          ))}
        </ul>
        <div className="summary">Total: {total} ₽</div>
        <form onSubmit={this.confirmOrder.bind(this)}>
          <label>
            <div className="name"> Name </div>
            <input
              className="input_field"
              onInput={(e) => setName(e.target.value)}
              value={customerName}
              type="text"
              name="customerName"
              placeholder="You"
              required
            />
          </label>
          <label>
            <div className="phone"> Your phone </div>
            <input
              className="input_field"
              onInput={(e) => setPhone(e.target.value)}
              value={customerPhone}
              type="tel"
              name="customerPhone"
              placeholder="Phone number"
              required
              pattern="[\+]\d{11}"
            />
          </label>
          <label>
            <div className="email"> Your e-mail </div>
            <input
              className="input_field"
              onInput={(e) => setEmail(e.target.value)}
              value={customerEmail}
              type="email"
              placeholder="Your e-mail"
              required
              pattern="[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}"
            />
          </label>
          <label>
            <div className="address"> Delivery address </div>
            <input
              className="input_field"
              onInput={(e) => setAddress(e.target.value)}
              value={deliveryAddress}
              type="text"
              name="customerAddress"
              placeholder="Your order will be delivered to the address"
              required
            />
          </label>
          <label>
            <div className="date"> Delivery date</div>
            <input
              className="input_field"
              onInput={(e) => setDate(e.target.value)}
              value={deliveryDate}
              type="date"
              name="date"
              placeholder="Your order will be delivered to the date"
              required
            />
          </label>
          <label>
            <div className="time">Delivery time</div>
            <input
              className="input_field"
              onInput={(e) => setTime(e.target.value)}
              value={deliveryTime}
              type="time"
              name="time"
              placeholder="Your order will be delivered to the time"
              required
            />
          </label>
          <button className="submit" type="submit">
            Checkout
          </button>
        </form>
      </div>
    );
  }
}

export default Order;
