import React from "react";
import SearchBar from "../search/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={`${styles["app-nav"]} navbar py-4 border-bottom shadow-sm`}>
      <span>ePortfolio</span>
      <SearchBar />
      <Link className={styles.link} to="/login">
        Login
      </Link>
      <Link className={styles.link} to="/chat">
        Inbox
      </Link>
    </nav>
  );
}
