import {React, useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import { StoreContext } from "../../Context/StoreContext";

const SideBar = () => {

   
const{sideMenu, setSideMenu,showMenu, setShowMenu} = useContext(StoreContext);

  return (
    <div className="side-bar">
      <div className="menu-icons">
      
      {sideMenu?<FontAwesomeIcon icon={faXmark} className="close-menu-button" onClick={()=>{setShowMenu(true);setSideMenu(false)} }/>:''}
      </div>
     {sideMenu? <div >
        <ul className="side-menu">
            <a href="#navbar" className="active">Home</a>
            <a href="#explore-menu" className="active">Menu</a>
            <a href="#app-download"  className="active">Mobile App</a>
            <a href="#footer"  className="active">Contact Us</a>
        </ul>
      </div>: ''}
    </div>
  );
};

export default SideBar;
