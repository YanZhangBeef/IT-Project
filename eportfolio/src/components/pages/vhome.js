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
            <div class = "container-fluid text-center" style ={{width:"70%"}}>
            <p className={`${hompageStyle.icontext}`}>Upload My Artifact</p>
            <p  className={`${hompageStyle.iconparagraph}`}>Use our 5 heads ePortfolio to add specific details about your project
            , such as titles, date of made, descriptions </p>
            
            <p  className={`${hompageStyle.iconparagraph}`}>you can upload different kinds of artifacts, like video, picture,
            or text file. You dont have to upload all of them</p>

            <p  className={`${hompageStyle.iconparagraph}`}>In our eportfolio system, you can upload as many artifacts as you wish,
            and you can even show your artifacts to particular groups according to your privacy settings</p>
          </div>
          </div>

            {/**the get hired Icon */}  
          <div class = "col-md">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faBriefcase} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <div class = "container-fluid text-center" style ={{width:"70%"}}>
            <p className={`${hompageStyle.icontext}`}>Get hired by employers</p>
            <p  className={`${hompageStyle.iconparagraph}`}>Use our 5 heads eportfolio system, you can get hired by employers super easy
            </p>
            <p  className={`${hompageStyle.iconparagraph}`}>The employers can also read your artifacts and they can send you
            a message if they want to hire you</p>

            <p  className={`${hompageStyle.iconparagraph}`}>The employers can also using the filter functions to find thoses people
            who are suitable for a specific jobs, and save plenty of time on it</p>
            </div>
          </div>

          {/**the inviting ppl Icon */}  
          <div class = "col-md">
            <a class="icon" href="#" ><FontAwesomeIcon icon={faPeopleArrows} className={`${hompageStyle.homeicons}`}/></a> 
            <br></br><br></br>
            <div class = "container-fluid text-center" style ={{width:"70%"}}>
            <p className={`${hompageStyle.icontext}`}>Share with friends</p>
            <p  className={`${hompageStyle.iconparagraph}`}>Copy our link and share it with friends</p>
            <p  className={`${hompageStyle.iconparagraph}`}>You can share your artifact to certain group of your friends as per
            your preference privacy settings</p>
            <p  className={`${hompageStyle.iconparagraph}`}>Furthermore, you can also read the others' artifacts if you are allowed.
            you learn from the popular employee</p>
            <p  className={`${hompageStyle.iconparagraph}`}>Get started sharing artifacts with your friends by signing up for an account
            via clicking "use for free"</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
