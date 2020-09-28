import React from "react";
import footerStyles from './Footer.module.css';

export default function Footer() {
  return (

    <footer className={` "container-fluid text-center ${footerStyles.footer}`}>
        <div class ="row">
            <div class = "col-sm-4">
                <a  className = {footerStyles.footertext} href= "https://github.com/vincent-haoy/IT-Project ">Contact us</a>
            </div>
            <div class = "col-sm-4">
                <p className = {footerStyles.footertext}>Copyright@2020@5heads</p>
            </div>
            <div class = "col-sm-4">
                <p className = {footerStyles.footertext}> 5heads</p>
            </div>
        </div>
    </footer>

  )
}
