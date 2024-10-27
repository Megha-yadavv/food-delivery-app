import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { assets } from '../../assests/assets'
const Cart = () => {
  const { cartItem, food_list, removeFromCart, addToCart, cartTotal } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      {cartTotal() ? (
        <div className="cart">
          <div className="cart-items">
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>

                    <div className="btn-quantity">
                      <button
                        className="btn-left"
                        onClick={() => removeFromCart(item._id)}
                      >
                        {cartItem[item._id] === 1 ? (
                          <FontAwesomeIcon icon={faTrashCan} />
                        ) : (
                          "-"
                        )}
                      </button>
                      <p>{cartItem[item._id]}</p>
                      <button
                        className="btn-right"
                        onClick={() => addToCart(item._id)}
                      >
                        +
                      </button>
                    </div>

                    <p>
                      <span>₹</span> {item.price * cartItem[item._id]}.00
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
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
                <button onClick={() => navigate("/order")}>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="promo code" />
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p className="empty-cart-message">
            Oops, looks like your cart is on a strict diet... 
          </p>
          <img src={assets.empty_cart} alt="" />
          <Link to='/'><button className="explore-menu">Explore Menu</button></Link>
        </div>
      )}
    </>
  );
};

export default Cart;
