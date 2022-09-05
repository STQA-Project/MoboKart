import React from "react";
import { NavLink } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="container d-flex p-3 m-2">
      <div className="components">
        <NavLink to="/signin">Signin</NavLink>
      </div>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
};

export default HomeScreen;
