import React from "react";
import hompageStyle from "./vhome.module.css"
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
          <h1 className = {hompageStyle.hometext}>5 Heads ePortfolio</h1>
          <br></br>

          {/**the buttom  */}
          <a class="btn btn-outline-light btn-lg" href="#" role="button">use for free </a>
        </div>        
      </div>

      {/**the 3 Icons */}  
      <div class = "container-fluid text-center">
        <div class = "row" style={{marginTop:"2rem"}}>

        {/**the Upload Icon */}  
          <div class = "col-md">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faCloudUploadAlt} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <p className={`${hompageStyle.icontext}`}>Upload My Artifact</p>
            <p  className={`${hompageStyle.iconparagraph}`}>you can post your artifacts ,picture and videos</p>
            
            <p  className={`${hompageStyle.iconparagraph}`}>You can also add more specific description about your artifacts, like
          dates, titles and introduction</p>
          </div>

            {/**the get hired Icon */}  
          <div class = "col-md">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faBriefcase} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <p className={`${hompageStyle.icontext}`}>Get hired by employers</p>
            <p  className={`${hompageStyle.iconparagraph}`}>explore the employers</p>
            <p  className={`${hompageStyle.iconparagraph}`}>The employers can also read your artifacts and they can send you
            a message if they want to hire you</p>
          </div>

          {/**the inviting ppl Icon */}  
          <div class = "col-md">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faPeopleArrows} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <p className={`${hompageStyle.icontext}`}>Share with friends</p>
            <p  className={`${hompageStyle.iconparagraph}`}>Copy our link and share it with friends</p>
            <p  className={`${hompageStyle.iconparagraph}`}>You can share your artifact to certain group of your friends as per
            your preference privacy settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
