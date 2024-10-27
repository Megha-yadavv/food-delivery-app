import React, { useState } from "react";
import "./LoginPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <FontAwesomeIcon icon={faXmark} onClick={() => setShowLogin(false)}  className="icon"/>
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to terms of use & privacy policy.</p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already have an account?<span onClick={()=>setCurrentState('Login')}>Login here</span>
          </p>
        ) : (
          <p>
            Don't have an account?<span onClick={()=> setCurrentState('Sign Up')}>Ceate Account</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
