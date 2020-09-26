import React from "react";
import hompageStyle from "./vhome.module.css"
import "./ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faBriefcase,
faCloudUploadAlt,
faPeopleArrows
} from "@fortawesome/free-solid-svg-icons";

export default function vhome(props) {
  return (
    
    <div class = "container-fullwidth ">

      {/**the full beach width picture  */}
      <div className = {hompageStyle.home}>
        <div className = {hompageStyle.landingtext}> 
          <h1 className = {hompageStyle.hometext}>5 Head ePortfolio</h1>
          <br></br>

          {/**the buttom  */}
          <a class="btn btn-primary btn-lg" href="#" role="button"
          style = {{background:"#90BBEF 71%",border: "0.15rem solid #FC5C39",
          borderRadius: "0.8rem"}}>use for free </a>
        </div>        
      </div>

      {/**the 3 Icons */}  
      <footer class = "container-fluid text-center">
        <div class = "row" style={{marginTop:"2rem"}}>

        {/**the Upload Icon */}  
          <div class = "col-sm">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faCloudUploadAlt} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <p className={`${hompageStyle.icontext}`}>Upload My Artifact</p>
          </div>

            {/**the get hired Icon */}  
          <div class = "col-sm">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faBriefcase} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <p className={`${hompageStyle.icontext}`}>Get hired by employers</p>
          </div>

          {/**the inviting ppl Icon */}  
          <div class = "col-sm">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faPeopleArrows} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <p className={`${hompageStyle.icontext}`}>Share with friends</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
