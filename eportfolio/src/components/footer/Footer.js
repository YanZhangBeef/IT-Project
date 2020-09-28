import React from "react";
import footerStyles from './Footer.module.css';

export default function Footer() {
  return (
<footer className={`navbar sticky-bottom navbar-dark ${footerStyles.footer}`}>
<a class="navbar-brand" href = "https://github.com/vincent-haoy/IT-Project">Contact us</a>
<a class="navbar-brand" style = {{fontSize:"x-small"}}>copyright@2020@github</a>
<a class="navbar-brand" href = "https://itproject-5head.atlassian.net/wiki/spaces/IP/overview?homepageId=393218">5heads</a>
</footer>
  )
}
