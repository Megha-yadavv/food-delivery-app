import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="" alt="" />
          <p>lorem</p>
          <div className="footer-social-icons">
          <FontAwesomeIcon icon={faFacebook} className="icon"/>
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          <FontAwesomeIcon icon={faLinkedin} className="icon" />

          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 899934567</li>
                <li>yummy@fooder.com</li>
            </ul>
        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Flavourfusion.com - All Rights Reserved.
      </p>
     
    </div>
  );
};

export default Footer;
