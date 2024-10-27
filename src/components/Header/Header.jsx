import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Discover a wide variety of delicious meals delivered to your
          door in minutes. From local favorites to international dishes, we’ve
          got something for every craving. Order now and enjoy fresh, fast, and
          reliable food delivery anytime!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
