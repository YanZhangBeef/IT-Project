import React from "react";
import footerStyles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`navbar p-3 justify-content-center bg-light sticky-bottom ${footerStyles.footer}`}
    >
      <span className={footerStyles.copy}>Copyright &copy;5Head 2020</span>
    </footer>
  );
}
