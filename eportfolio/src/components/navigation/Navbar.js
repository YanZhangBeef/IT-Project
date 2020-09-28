import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import {
  faMailBulk,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
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
          <div className={styles.circle}>
            <a class="navbar-brand" href="/chat">
              <FontAwesomeIcon
                icon={faMailBulk}
                className={`${styles.mailIcon}`}
              />
            </a>
          </div>

          {/**User Icon*/}
          <div className={styles.circle}>
            <a class="navbar-brand" href="/">
              <FontAwesomeIcon
                icon={faUser}
                className={`${styles.peopleIcon}`}
              />
            </a>
          </div>
          {/**log in button */}
          <a class="btn btn-outline-light" href="/login" role="button">
            login
          </a>
        </div>
      </div>
    </nav>
  );
}
