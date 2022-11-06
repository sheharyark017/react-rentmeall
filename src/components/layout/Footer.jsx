import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes["footer-top-line"]}></div>
        <div className={classes["inner-footer"]}>
          <div className={classes["footer-about"]}>
            <div className={classes["footer-logo"]}>
              <p>RentMeAll</p>
            </div>
            <div className={classes["footer-about-text"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                fuga tempora ipsa possimus reiciendis provident, natus, magni
                temporibus, necessitatibus asperiores officia quis recusandae
                consequatur.
              </p>
            </div>
          </div>
          <div className={classes["footer-links-col"]}>
            <div className={classes["footer-top"]}>
              <p>OTHER LINKS</p>
            </div>
            <div className={classes["footer-links"]}>
              <a href="/">Terms of services</a>
              <a href="/">Privacy policy</a>
              <a href="/">Item listings</a>
              <a href="/">List an item</a>
            </div>
          </div>
          <div className={classes["footer-links-col"]}>
            <div className={classes["footer-top"]}>
              <p>CATEGORIES</p>
            </div>
            <div className={classes["footer-links"]}>
              <a href="/">Spaces</a>
              <a href="/">Vehicles</a>
              <a href="/">Furniture</a>
              <a href="/">Business</a>
              <a href="/">Equipments</a>
              <a href="/">Tools</a>
            </div>
          </div>
        </div>
      </footer>
      <div className={classes["footer-bottom"]}>
        <p>Copyright ©2021 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
