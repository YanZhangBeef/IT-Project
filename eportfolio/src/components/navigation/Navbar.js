import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
export default function Navbar(props) {
  return (
<nav class="navbar navbar-expand-xl navbar-light" id = "navbar">
    <a class="navbar-brand" id = "eport">ePortfolio</a>


  <div class="container" id = "search">
  <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
      <FontAwesomeIcon icon={ faSearch} />
      </div>
      <input type="text" class="form-control" id="searchinput" placeholder="search from unimelb students" aria-describedby="basic-addon1"/>
    </div>
  </form>
</div>



     <div class="container-fluid" id = "icons">
    <div class = "circle" id = "circle">
      <a class="navbar-brand" href="/chat" id = "MailBulk"><FontAwesomeIcon icon={faMailBulk} id="imailbulk"/></a> 
    </div>
    <div class = "circle" id = "circle">
    <a class="navbar-brand" href="/" id = "user"><FontAwesomeIcon icon={ faUser} id = "iuser" /></a>
    </div>
    <a class="btn btn-outline-light" href="/login" role="button">login</a>
    </div>
</nav>
  )
}
