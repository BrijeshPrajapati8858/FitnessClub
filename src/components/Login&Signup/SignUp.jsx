import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";



const SignUp = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useNavigate();


  return (
    <div className=" flex-r container">
      <div className="flex-r login-wrapper">
        <div className="login-text">
          <h1>Sign Up</h1>
          <p>It's not long before you embark on this journey! </p>

          <form className="flex-c">
            <div className="input-box">
              <span className="label">Name</span>
              <div className=" flex-r input">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter Your Name"
                />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box">
              <span className="label">E-mail</span>
              <div className=" flex-r input">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  value={email}
                  placeholder="name@abc.com"
                />
                <i className="fas fa-at"></i>
              </div>
            </div>

            <div className="input-box">
              <span className="label">Password</span>
              <div className="flex-r input">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  value={password}
                  placeholder="8+ (a, A, 1, #)"
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="input-box">
              <span className="label">Confirm Password</span>
              <div className="flex-r input">
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="8+ (a, A, 1, #)"
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>

            {/* <div className="check">
            <input type="checkbox" name="" id="" />
            <span>I've read and agree with T&C</span>
          </div> */}

            <input
              className="btn"
              type="submit"
        
              value="SignUp Now"
            />
            <span className="extra-line">
              <span> You have an account?</span>
              <Link to="/login"> Sign-In</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
