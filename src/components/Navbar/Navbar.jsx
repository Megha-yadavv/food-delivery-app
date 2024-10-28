import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,faBars,faXmark
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const {cartTotal, totalItemInCart} = useContext(StoreContext);
  const[showMenu, setShowMenu] = useState(true);
  const[sideMenu, setSideMenu] = useState(false);


  return (
    <div className="navbar">
      <Link to='/'>
        <h2 className="logo">FlavourFusion.</h2>
         <div className="menu-bar">
          { showMenu?<FontAwesomeIcon icon={faBars} className="menu-button" onClick={()=>{setShowMenu(false);setSideMenu(true)}} />:''}
         {sideMenu?<FontAwesomeIcon icon={faXmark} className="close-menu-button" onClick={()=>{setShowMenu(true);setSideMenu(false)} }/>:''}
         </div>
      </Link>
      <ul className={sideMenu?"side-menu":"navbar-menu"}>
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile App")}
          className={menu === "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
         {cartTotal()?<Link to='/cart'><div className="dot">{totalItemInCart()}</div></Link>:<></>}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
