import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navbarStyles from "./Navbar.module.css";
import {
  faMailBulk,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  function handleChange(e) {
    const query = document.getElementById("searchQuery").value;
    props.history.push({ pathname: "/search", state: query });
  }

  return (
    <nav className={`navbar navbar-expand-md ${navbarStyles.navbar}`}>
      <a
        class="collapse navbar-collapse"
        style={{ marginLeft: "2rem", marginRight: "20rem", color: "white" }}
      >
        ePortfolio
      </a>

      {/**the search bar module*/}
      <div
        className={`d-flex align-items-center" ${navbarStyles.searchbarContainer}`}
      >
        <form class="form-inline">
          <div class="input-group">
            {/**search icon */}
            <div
              className={`input-group-prepend ${navbarStyles.inputGroupPrepend}`}
            >
              <FontAwesomeIcon icon={faSearch} />
            </div>

            {/**search input */}
            <input
              type="text"
              name="query"
              id="searchQuery"
              class="form-control"
              style={{ border: "0ch", backgroundColor: "#96bbe8" }}
              placeholder="search from students"
              onChange={handleChange}
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
      </div>

      {/**Icon module*/}
      <a className={`collapse navbar-collapse ${navbarStyles.iconsHolder}`}>
        {/**Mail Icon*/}
        <div class="d-flex align-items-center">
          <div className={navbarStyles.circle}>
            <a class="navbar-brand" href="/chat">
              <FontAwesomeIcon
                icon={faMailBulk}
                className={`${navbarStyles.mailIcon}`}
              />
            </a>
          </div>

          {/**User Icon*/}
          <div className={navbarStyles.circle}>
            <a class="navbar-brand" href="/">
              <FontAwesomeIcon
                icon={faUser}
                className={`${navbarStyles.peopleIcon}`}
              />
            </a>
          </div>
          {/**log in button */}
          <a class="btn btn-outline-light" href="/login" role="button">
            login
          </a>
        </div>
      </a>
    </nav>
  );
};

export default withRouter(Navbar);
