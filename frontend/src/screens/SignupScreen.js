import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignupScreen = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="Signup">
      <div className="signInfo">
        <h1 className="signup_header">Signup</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          onChange={handleChange}
          value={value.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          onChange={handleChange}
          value={value.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          onChange={handleChange}
          value={value.password}
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm password"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          onChange={handleChange}
          value={value.password}
        />

        <div className="footer">
          <span className="error">{error}</span>
          <button>Signup</button>
          <p>
            Already have any account?{" "}
            <span>
              <NavLink exact to="/signin">
                Login
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
