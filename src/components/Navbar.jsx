import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Pet Adoption</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/adopt">Adopt</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
