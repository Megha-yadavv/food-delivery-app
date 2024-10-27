import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assests/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, image, description, price }) => {
  const [itemCount, setItemCount] = useState(0);

  const{cartItem, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="salad" />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="rating" />
        </div>

        <p className="food-item-description">{description}</p>
        <div className="food-item-btn-container">
          <p className="food-item-price">₹ {price}</p>
          {!cartItem[id]? (
            <button className="add-btn" onClick={() => addToCart(id)}>
              Add
            </button>
          ) : (
            <div className="item-add-btn">
              <button
                className="calc-btn-1 "
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
              <p>{cartItem[id]}</p>
              <button
                className="calc-btn-2 "
                onClick={() => addToCart(id)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
