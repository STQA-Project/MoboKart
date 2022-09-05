import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SigninScreen = () => {
  const [error, setError] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        autoCapitalize="false"
        autoComplete="false"
        placeholder="Enter your email"
        onChange={handleChange}
        value={value.email}
      />
      <input
        type="password"
        name="password"
        autoCapitalize="false"
        autoCorrect="false"
        autoComplete="false"
        placeholder="Enter your password"
        onChange={handleChange}
        value={value.password}
      />

      <div className="footer">
        <span className="error">{error}</span>
        <button>Login</button>
        <p>By signing-in you Agree to our terms and conditions</p>
        <p>
          Do not have any account?{" "}
          <span>
            <NavLink exact to="/signup">
              Signup
            </NavLink>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninScreen;
