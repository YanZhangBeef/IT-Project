import React, { useState, useEffect, useCallback } from "react";
import firebase from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import {
  faEnvelope,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // should change this to a prop once chat is integrated
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
      console.log(user);
    });
    return () => {
      unlisten();
    };
  }, []);

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <nav
      className={`navbar navbar-dark navbar-expand-md justify-content-between navbar-light ${styles.navbar}`}
    >
      <a className="navbar-brand">ePortfolio</a>

      {/**the search bar module*/}
      <div
        className={`d-flex align-items-center mx-auto ${styles.searchbarContainer}`}
      >
        {/**search icon */}
        <div className={`mx-2 ${styles.inputGroupPrepend}`}>
          <FontAwesomeIcon icon={faSearch} />
        </div>

        {/**search input */}
        <input
          type="text"
          className={`m-1 ${styles.searchBar}`}
          placeholder="Search for projects"
          aria-describedby="basic-addon1"
        />
      </div>

      {/**Icon module*/}
      <div className={`collapse navbar-collapse ${styles.iconsHolder}`}>
        {/**Mail Icon*/}
        <div className="d-flex align-items-center">
          {user != null && (
            <div className={styles.circle}>
              <a class="navbar-brand" href="/chat">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={`${styles.mailIcon}`}
                />
              </a>
            </div>
          )}

          {/**User Icon*/}
          {user != null && (
            <div className="d-flex align-items-center">
              <div className={styles.circle}>
                <Link to={"/profile/" + user.uid}>
                  <a class="navbar-brand" href="/">
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`${styles.peopleIcon}`}
                    />
                  </a>
                </Link>
              </div>
              <div className={"mr-4 font-weight-bold " + styles.username}>
                {user.displayName}
              </div>
            </div>
          )}
          {/**log in button */}
          {user == null ? (
            <Link to="/login">
              <a class="btn btn-outline-light" role="button">
                Login
              </a>
            </Link>
          ) : (
            <a class="btn btn-outline-light" onClick={logout} role="button">
              Logout
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
