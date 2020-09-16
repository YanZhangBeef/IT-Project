import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Icon1 from "./img/MailIcon.png"
import Icon2 from "./img/peopleIcon.png"
export default function Navbar(props) {
  return (
    <nav className={`${styles["app-nav"]} navbar py-4 border-bottom shadow-sm`}>
      <Link className={styles.link} to = "/login">ePortfolio</Link>

      <div className = {styles.searchContainer}>
          <input type="text" id = "inputtext" name="condition" placeholder="Search" />
          <input type="submit" id ="bottom" value="search" />
      </div>


      {/**The PPL and mail Icon */}
      <ul className={styles.navbaricon}>
        <li className={styles.icon}> 
          <Link to = "/chat"><img src={Icon1} alt="MailIcon"/></Link>
        </li>
        <li className={styles.icon}> 
          <Link to = "/"><img src={Icon2} alt="PeopleIcon"/></Link>
        </li>
      </ul>
    </nav>
  );
}
