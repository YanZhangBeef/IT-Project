import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="app-nav navbar py-4 border-bottom shadow-sm">
      <span>ePortfolio</span>
      <Link to="/login">Login</Link>
    </nav>
  );
}
