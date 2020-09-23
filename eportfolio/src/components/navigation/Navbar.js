import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navbarStyles from './Navbar.module.css';
import {
  faMailBulk,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-xl navbar-light ${navbarStyles.navbar}`}>
      <a class = "navbar-brand"
      style = {{marginLeft: "2rem", color:"white"}}
       >ePortfolio</a>

      <div className={`d-flex align-items-center" ${navbarStyles.searchbarContainer}`}>
        <form class="form-inline">
          <div class="input-group">
            <div  className={`input-group-prepend ${navbarStyles.inputGroupPrepend}`}>
              <FontAwesomeIcon icon={ faSearch}/>
            </div>
            <input type="text" class="form-control" 
            style = {{border: "0ch", backgroundColor: "#96bbe8",width: "18rem"}}
            placeholder="search from unimelb students" 
            aria-describedby="basic-addon1"/>
          </div>
        </form>
    </div>

      <a className={`navbar-brand ${navbarStyles.iconsHolder}`}>
        <div class="d-flex align-items-center">
          <div className = {navbarStyles.circle}>
            <a class="navbar-brand" href="/chat" ><FontAwesomeIcon icon={faMailBulk} className={`${navbarStyles.mailIcon}`}/></a> 
          </div>
          <div className = {navbarStyles.circle}>
            <a class="navbar-brand" href="/"><FontAwesomeIcon icon={ faUser} className={`${navbarStyles.peopleIcon}`} /></a>
          </div>
          <a class="btn btn-outline-light" href="/login" role="button">login</a>
        </div>
      </a>
    </nav>
  )
}
