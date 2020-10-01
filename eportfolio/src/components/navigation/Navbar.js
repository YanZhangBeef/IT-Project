import React, { useContext, createRef } from "react";
import firebase from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import { Redirect, withRouter } from "react-router-dom";
import {
  faEnvelope,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../data/Auth";

function Navbar(props) {
  // should change this to a prop once chat is integrated

  const query = createRef();

  function handleChange(e) {
    props.history.push({ pathname: "/search", state: query.current.value });
  }

  const logout = () => {
    firebase.auth().signOut();
    props.history.push("/");
  };

  const { currentUser } = useContext(AuthContext);

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
          onChange={handleChange}
          ref={query}
        />
      </div>

      {/**Icon module*/}
      <div className={`collapse navbar-collapse ${styles.iconsHolder}`}>
        {/**Mail Icon*/}
        <div className="d-flex align-items-center">
          {currentUser != null && (
            <div className={styles.circle}>
              <div className="navbar-brand">
                <Link to="/chat">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`${styles.mailIcon}`}
                  />
                </Link>
              </div>
            </div>
          )}

          {/**User Icon*/}
          {currentUser != null && (
            <div className="d-flex align-items-center">
              <div className={styles.circle}>
                <Link to={"/profile/" + currentUser.uid}>
                  <div className="navbar-brand">
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`${styles.peopleIcon}`}
                    />
                  </div>
                </Link>
              </div>
              <div className={"mr-4 font-weight-bold " + styles.username}>
                {currentUser.displayName}
              </div>
            </div>
          )}
          {/**log in button */}
          {currentUser == null ? (
            <Link to="/login">
              <div className="btn btn-outline-light" role="button">
                Login
              </div>
            </Link>
          ) : (
            <a className="btn btn-outline-light" onClick={logout} role="button">
              Logout
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
