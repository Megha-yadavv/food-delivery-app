import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { cartTotal } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required/>
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" required/>
        <div className="multi-fields">
          <input type="text" placeholder="City" required/>
          <input type="text" placeholder="State" required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Pin code" required/>
          <input type="text" placeholder="Country" required/>
        </div>
        <input type="text" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {cartTotal()}.00</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {5}.00</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {cartTotal() + 5}.00</b>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
